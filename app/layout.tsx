import './globals.css'; import type {Metadata} from 'next';
export const metadata:Metadata={title:'Ideal Home Health',description:'Home care services in New York City'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
