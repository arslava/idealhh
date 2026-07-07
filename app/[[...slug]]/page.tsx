import { notFound } from 'next/navigation'
import { getPage, allPages } from '@/lib/pages'
import { SiteShell } from '@/components/SiteShell'
import { PageRenderer } from '@/components/PageRenderer'

function parts(path: string) {
  return path === '/' ? [] : path.replace(/^\//, '').replace(/\/$/, '').split('/')
}

export function generateStaticParams() {
  return allPages().filter((p) => p.lang === 'en').map((p) => ({ slug: parts(p.path) }))
}

export default function Page({ params }: { params: { slug?: string[] } }) {
  const page = getPage('en', params.slug)
  if (!page) notFound()
  return <SiteShell locale="en"><PageRenderer page={page} /></SiteShell>
}
