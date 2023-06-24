import Sidebar from "@/components/Sidebar"
import "./globals.css"
import { Figtree } from "next/font/google"
import SupabaseProvider from "@/Providers/SupabaseProvider"
import UserProvider from "@/Providers/UserProvider"
import ModalProvider from "@/Providers/ModalProvider"
import ToastProvider from "@/Providers/ToastProvider"
import getSongsById from "@/actions/getSongsById"
import getSongs from "@/actions/getSongs"
import Player from "@/components/Player"

const inter = Figtree({ subsets: ["latin"] })
export const revalidate = 0
export const metadata = {
  title: "Spotify clone",
  description: "A Spotify clone made with Next.js and Tailwind CSS",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const songs = await getSongs()
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={songs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
