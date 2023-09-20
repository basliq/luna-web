import '@/style/global.scss'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Luna',
  description: "The world's simplest project management tool",
}

type RootProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootProps) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
