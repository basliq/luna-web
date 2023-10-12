import '@/style/global.scss'
import '@mantine/core/styles.css'
import {MantineProvider, ColorSchemeScript} from '@mantine/core'
import {Montserrat} from 'next/font/google'
import type {Metadata} from 'next'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Luna',
  description: "The world's simplest project management tool",
}

type RootProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootProps) {
  return (
    <html lang='en' className={montserrat.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
