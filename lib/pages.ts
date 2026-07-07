import pages from '@/data/pages.json'
export type Block = { name:string; data: Record<string, any> }
export type MigratedPage = { id:number; lang:string; title:string; slug:string; path:string; content:string; excerpt?:string; parent?:number; blocks:Block[] }
export function getAllPages(): MigratedPage[] { return pages as MigratedPage[] }
export function normalizePath(slugParts?: string[]) { const p='/' + (slugParts||[]).join('/'); return p === '/' ? '/' : p.replace(/\/$/, '') + '/' }
export function getPage(locale:string, slugParts?: string[]) { const normalized = normalizePath(slugParts); return getAllPages().find(p => p.lang === locale && p.path === normalized) }
export function pagesForLocale(locale:string) { return getAllPages().filter(p => p.lang === locale) }
export function makeHref(locale:string, path:string) { return `${locale === 'en' ? '' : '/' + locale}${path}` }
