import '../globals.css'
import type { Metadata } from 'next'
import { Providers } from "../providers";
import Navigation from "../components/navbar";
import ConnectWithUs from "../components/connectwithus"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


/* Assign name to page/site */
export const metadata: Metadata = {
  title: 'SheHacks+',
  description: 'The 8th Shehacks+ hackathon hosted by WITS+',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navigation />
      {children}
      <ConnectWithUs />
    </div>
  )
}