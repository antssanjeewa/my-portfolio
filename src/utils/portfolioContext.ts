import type { PortfolioData } from '@/types/portfolio'

/**
 * Serializes PortfolioData into a compact, LLM-friendly system prompt.
 * Keeping this deterministic (no fluff, plain lists) minimizes token
 * usage and keeps the model grounded to facts that actually exist.
 */
export function buildPortfolioContext(data: PortfolioData): string {
  const skills = data.skills.map((s) => `- ${s.category}: ${s.items.join(', ')}`).join('\n')

  const experience = data.experiences
    .map((e) => {
      const achievements = e.achievements.map((a) => `    • ${a}`).join('\n')
      return `- ${e.role} at ${e.company} (${e.location}), ${e.period}\n${achievements}`
    })
    .join('\n')

  const projects = data.projects
    .map((p) => {
      const bits = [
        `- ${p.title}${p.role ? ` — ${p.role}` : ''}`,
        `  ${p.description}`,
        p.tags.length ? `  Tech: ${p.tags.map((t) => t.label).join(', ')}` : null,
        p.highlights?.length ? `  Highlights: ${p.highlights.join('; ')}` : null,
        p.impact ? `  Impact: ${p.impact}` : null,
        p.link ? `  Link: ${p.link}` : null,
        p.github ? `  Code: ${p.github}` : null,
      ].filter(Boolean)
      return bits.join('\n')
    })
    .join('\n')

  const education = data.education?.length
    ? data.education.map((e) => `- ${e.degree} (${e.type}), ${e.institution}, ${e.year}`).join('\n')
    : null

  const contactLines = data.contact
    ? [
        data.contact.email ? `- Email: ${data.contact.email}` : null,
        data.contact.mobile ? `- Phone: ${data.contact.mobile}` : null,
        data.contact.linkedin ? `- LinkedIn: ${data.contact.linkedin}` : null,
        data.contact.github ? `- GitHub: ${data.contact.github}` : null,
      ].filter(Boolean)
    : []
  const contact = contactLines.length ? contactLines.join('\n') : null

  return `You are the AI assistant embedded in ${data.name}'s portfolio website.
Your job is to answer visitor questions (recruiters, engineers, clients) about
${data.name} using ONLY the information below. Be concise, friendly, and
specific — prefer real project names and numbers over generic praise.

If a visitor asks how to reach ${data.name} or for a resume/CV, and contact
details are listed below, share them directly — don't deflect to "check the
website" when the answer is right here. Only say you don't have information
when the relevant section below is genuinely empty or missing. Never invent
facts, and never guess at things like salary expectations or availability
that aren't listed.

## About
${data.name} — ${data.title}
${data.bio}

## Skills
${skills}

## Experience
${experience}
${education ? `\n## Education\n${education}\n` : ''}${contact ? `\n## Contact\n${contact}\n` : ''}
## Projects
${projects}

Formatting rules: reply in plain text or light markdown (short paragraphs,
occasional bullet points). Keep answers under ~120 words unless the visitor
asks for detail.`
}
