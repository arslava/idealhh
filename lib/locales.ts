export const locales = ['en','es','ru','bn','ko','zh-hans','zh-hant','hi','uz','ur','ar'] as const;
export function isLocale(v:string){return (locales as readonly string[]).includes(v)}
export function prefix(locale:string){return locale==='en'?'':'/'+locale}
export const labels:Record<string,string>={en:'English',es:'Español',ru:'Русский',bn:'বাংলা',ko:'한국어','zh-hans':'简体中文','zh-hant':'繁體中文',hi:'हिन्दी',uz:'Oʻzbek',ur:'اردو',ar:'العربية'}
