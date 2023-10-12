import '@/style/global.scss'
import {Manrope} from 'next/font/google'
import type {Metadata} from 'next'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export const metadata: Metadata = {
  title: 'Luna | Manage Your Projects',
  description: "The world's simplest project management tool",
}

type RootProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootProps) {
  return (
    <html lang='en' className={manrope.className}>
      <body>{children}</body>
    </html>
  )
}
