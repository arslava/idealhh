import Link from 'next/link'
import { localePrefix, languageLabels } from '@/lib/locales'

const nav = [
  ['Services','/services/'], ['How to Enroll','/how-to-enroll/'], ['Conditions','/conditions/'], ['Careers','/careers/'], ['Contact','/contact-us-2/']
]
export function SiteShell({ locale, children }: { locale: string; children: React.ReactNode }) {
  const prefix = localePrefix(locale)
  return <div className="site">
    <div className="topbar"><div className="container"><span>New York Home Health Care</span><a href="tel:+17182323223">(718) 232-3223</a></div></div>
    <header className="header"><div className="container header-inner">
      <Link href={`${prefix}/`} className="logo"><span className="logo-mark">IH</span><span>Ideal Home Health</span></Link>
      <nav className="nav">{nav.map(([label,path]) => <Link key={path} href={`${prefix}${path}`}>{label}</Link>)}</nav>
      <Link className="header-cta" href={`${prefix}/enroll-now/`}>Enroll Now</Link>
    </div>
    <div className="container lang-row">{Object.entries(languageLabels).map(([code,label]) => <Link key={code} href={`${code==='en'?'':'/'+code}/`} className={code===locale?'active':''}>{label}</Link>)}</div>
    </header>
    <main>{children}</main>
    <footer className="footer"><div className="container footer-grid"><div><b>Ideal Home Health</b><p>Compassionate home care services in New York.</p></div><div><b>Contact</b><p><a href="tel:+17182323223">(718) 232-3223</a><br/>Brooklyn, NY</p></div><div><b>Quick Links</b><p><Link href={`${prefix}/services/`}>Services</Link><br/><Link href={`${prefix}/careers/`}>Careers</Link><br/><Link href={`${prefix}/contact-us-2/`}>Contact</Link></p></div></div><div className="container copyright">© {new Date().getFullYear()} Ideal Home Health</div></footer>
  </div>
}
