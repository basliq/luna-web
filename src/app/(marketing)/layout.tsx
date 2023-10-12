import '@/style/global.scss'
import {Montserrat} from 'next/font/google'
import type {Metadata} from 'next'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Luna App',
  description: "The World's simplest project management tool",
}

type RootProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootProps) {
  return (
    <html lang='en' className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
