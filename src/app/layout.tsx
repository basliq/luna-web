import '@/style/global.scss'
import {Montserrat} from 'next/font/google'
import type {Metadata} from 'next'
import {loadConfig} from '@/config/load-config.ts'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Luna | Manage Your Projects',
  description: "The world's simplest project management tool",
}

type Props = {
  children: React.ReactNode
}

loadConfig()

export default function RootLayout({children}: Props) {
  return (
    <html lang='en' className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
