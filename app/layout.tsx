import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";

import { Inter, Abril_Fatface, Work_Sans, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const abril = Abril_Fatface({ subsets: ['latin'], weight: ['400'] })
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })


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
<html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
