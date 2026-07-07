import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/SiteShell'
import { PageRenderer } from '@/components/PageRenderer'
import { getAllPages, getPage } from '@/lib/pages'
import { isLocale } from '@/lib/locales'

export function generateStaticParams() { return getAllPages().filter(p => p.lang !== 'en').map(p => ({ locale:p.lang, slug: p.path === '/' ? [] : p.path.split('/').filter(Boolean) })) }
export async function generateMetadata({ params }: { params: { locale:string; slug?: string[] } }) { const page = getPage(params.locale, params.slug); return { title: page ? `${page.title} | Ideal Home Health` : 'Ideal Home Health' } }
export default function LocalePage({ params }: { params: { locale:string; slug?: string[] } }) { if (!isLocale(params.locale)) notFound(); const page = getPage(params.locale, params.slug); if (!page) notFound(); return <SiteShell locale={params.locale}><PageRenderer page={page} /></SiteShell> }
