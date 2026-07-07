import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Ideal Home Health', description: 'Ideal Home Health services in New York.' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
