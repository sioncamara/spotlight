import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import avatar from '@/images/avatar.ico'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sion Wilks',
    default: 'Sion Wilks - Front-End Software Engineer',
  },
  description:
    'I’m Sion, a front-end software engineer based in Minneapolis, MN. I currently work at Target where I work on internal applications and have worked on several non-trivial side projects',
  icons: {
    icon: avatar.src,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
