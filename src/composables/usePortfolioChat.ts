import { ref, computed } from 'vue'
import type { ChatMessage } from '@/types/chat'
import type { PortfolioData } from '@/types/portfolio'
import { buildPortfolioContext } from '@/utils/portfolioContext'

const GEMINI_MODEL = 'gemini-3.1-flash-lite' // swap for 'gemini-3.5-flash' if you want deeper reasoning over speed
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`

const MAX_HISTORY_TURNS = 8 // keep requests small; older turns are dropped, not the system context

function uid() {
  return crypto.randomUUID()
}

export function usePortfolioChat(portfolioData: PortfolioData) {
  const messages = ref<ChatMessage[]>([])
  const isOpen = ref(false)
  const isLoading = ref(false)
  const errorMessage = ref<string | null>(null)

  const systemContext = buildPortfolioContext(portfolioData)
  const hasMessages = computed(() => messages.value.length > 0)

  let controller: AbortController | null = null

  function toggle() {
    isOpen.value = !isOpen.value
  }

  function reset() {
    messages.value = []
    errorMessage.value = null
  }

  async function send(userText: string) {
    const text = userText.trim()
    if (!text || isLoading.value) return

    errorMessage.value = null
    messages.value.push({ id: uid(), role: 'user', content: text, createdAt: Date.now() })

    isLoading.value = true
    controller = new AbortController()

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined
      if (!apiKey) throw new Error('Missing VITE_GEMINI_API_KEY')

      const history = messages.value.slice(-MAX_HISTORY_TURNS * 2).map((m) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      }))

      const res = await fetch(`${API_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemContext }] },
          contents: history,
          generationConfig: { temperature: 0.4, maxOutputTokens: 400 },
        }),
      })

      if (!res.ok) {
        const body = await res.text()
        throw new Error(`Gemini API error ${res.status}: ${body}`)
      }

      const data = await res.json()
      const reply: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text
      if (!reply) throw new Error('Empty response from model')

      messages.value.push({
        id: uid(),
        role: 'assistant',
        content: reply.trim(),
        createdAt: Date.now(),
      })
    } catch (err) {
      if ((err as Error).name === 'AbortError') return
      const msg = err instanceof Error ? err.message : 'Something went wrong'
      errorMessage.value = msg
      messages.value.push({
        id: uid(),
        role: 'assistant',
        content: "Sorry, I couldn't reach the assistant just now. Please try again in a moment.",
        createdAt: Date.now(),
        isError: true,
      })
    } finally {
      isLoading.value = false
      controller = null
    }
  }

  function stop() {
    controller?.abort()
  }

  return { messages, isOpen, isLoading, errorMessage, hasMessages, toggle, reset, send, stop }
}
