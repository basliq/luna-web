'use client'

import {loadConfig} from '@/config/load-config.ts'

type Props = {
  children: React.ReactNode
}

loadConfig()

export default function RootLayout({children}: Props) {
  return <main>{children}</main>
}
