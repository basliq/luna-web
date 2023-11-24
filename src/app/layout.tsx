import '@/style/global.scss'
import {Montserrat} from 'next/font/google'
import type {Metadata} from 'next'

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

export default function RootLayout({children}: Props) {
  return (
    <html lang='en' className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}

// app loads -> root layout (this file) is executed first -> useConfigLoader()
// -> at this stage we should do some stuff
// 3. if any value is still empty -> fill those with application defaults
// 4. sync the global state with local object store
