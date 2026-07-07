export const locales = ['en','es','ru','bn','ko','zh-hans','zh-hant','hi','uz','ur','ar'] as const
export type Locale = typeof locales[number]
export function isLocale(value: string): value is Locale { return (locales as readonly string[]).includes(value) }
export function localePrefix(locale: string) { return locale === 'en' ? '' : `/${locale}` }
export const languageLabels: Record<string,string> = { en:'English', es:'Español', ru:'Русский', bn:'বাংলা', ko:'한국어', 'zh-hans':'简体中文', 'zh-hant':'繁體中文', hi:'हिन्दी', uz:'Oʻzbek', ur:'اردو', ar:'العربية' }
