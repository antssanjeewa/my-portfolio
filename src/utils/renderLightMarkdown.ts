function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function formatInline(line: string): string {
  return line
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(
      /`(.+?)`/g,
      '<code class="rounded bg-foreground/10 px-1 py-0.5 text-[0.85em]">$1</code>',
    )
}

/**
 * Converts a small, safe subset of markdown (bold, inline code, bullet
 * lists, paragraphs) into HTML. Input is HTML-escaped first, so this is
 * safe to use with v-html even though the text comes from an LLM.
 */
export function renderLightMarkdown(text: string): string {
  const lines = escapeHtml(text.trim()).split('\n')
  const out: string[] = []
  let inList = false

  const closeList = () => {
    if (inList) {
      out.push('</ul>')
      inList = false
    }
  }

  for (const raw of lines) {
    const line = raw.trim()
    const bulletMatch = line.match(/^[-*]\s+(.*)/)

    if (bulletMatch) {
      if (!inList) {
        out.push('<ul class="list-disc pl-4 space-y-1 my-1.5">')
        inList = true
      }
      out.push(`<li>${formatInline(bulletMatch[1] ?? '')}</li>`)
      continue
    }

    closeList()

    if (line === '') continue
    out.push(`<p class="my-1.5 first:mt-0 last:mb-0">${formatInline(line)}</p>`)
  }

  closeList()
  return out.join('')
}
