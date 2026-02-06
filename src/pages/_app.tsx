import type { AppProps } from 'next/app'
import { RootLayout } from '@/modules/ui/layouts'
import '@/modules/ui/theme/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
