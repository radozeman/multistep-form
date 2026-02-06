import { geistMono, geistSans } from '@/modules/ui/fonts'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      {children}
    </main>
  )
}

export { RootLayout }
