import pages from '@/data/pages.json'
export type Block={name:string;data:Record<string,any>}
export type Page={id:number;lang:string;title:string;slug:string;path:string;content:string;excerpt?:string;blocks:Block[]}
export function allPages(){return pages as Page[]}
export function normalize(parts?:string[]){let p='/' + (parts||[]).join('/'); p=p.replace(/\/+/g,'/'); return p==='/'?'/':p.replace(/\/$/,'')+'/'}
export function getPage(locale:string, parts?:string[]){let path=normalize(parts); return allPages().find(p=>p.lang===locale && p.path===path) || (path==='/'? allPages().find(p=>p.lang===locale && (p.title==='Home Page' || p.slug==='home-page')): undefined)}
export function getNav(locale:string){ const wanted=['/','/about-us/','/services/','/services/home-health-aide/','/services/visiting-home-nurse/','/careers/','/contact-us-2/']; return wanted.map(path=>allPages().find(p=>p.lang===locale && p.path===path) || allPages().find(p=>p.lang==='en' && p.path===path)).filter(Boolean) as Page[] }
export function href(locale:string,path:string){return (locale==='en'?'':'/'+locale)+path}
