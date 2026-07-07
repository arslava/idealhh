import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/SiteShell'
import { PageRenderer } from '@/components/PageRenderer'
import { getAllPages, getPage } from '@/lib/pages'

export function generateStaticParams() { return getAllPages().filter(p => p.lang === 'en').map(p => ({ slug: p.path === '/' ? [] : p.path.split('/').filter(Boolean) })) }
export async function generateMetadata({ params }: { params: { slug?: string[] } }) { const page = getPage('en', params.slug); return { title: page ? `${page.title} | Ideal Home Health` : 'Ideal Home Health' } }
export default function Page({ params }: { params: { slug?: string[] } }) { const page = getPage('en', params.slug); if (!page) notFound(); return <SiteShell locale="en"><PageRenderer page={page} /></SiteShell> }
