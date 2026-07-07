import { notFound } from 'next/navigation'
import { getPage, allPages } from '@/lib/pages'
import { isLocale } from '@/lib/locales'
import { SiteShell } from '@/components/SiteShell'
import { PageRenderer } from '@/components/PageRenderer'

function parts(path: string) {
  return path === '/' ? [] : path.replace(/^\//, '').replace(/\/$/, '').split('/')
}

export function generateStaticParams() {
  return allPages().filter((p) => p.lang !== 'en').map((p) => ({ locale: p.lang, slug: parts(p.path) }))
}

export default function LocalePage({ params }: { params: { locale: string; slug?: string[] } }) {
  if (!isLocale(params.locale)) notFound()
  const page = getPage(params.locale, params.slug)
  if (!page) notFound()
  return <SiteShell locale={params.locale}><PageRenderer page={page} /></SiteShell>
}
