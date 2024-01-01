import type { Metadata } from 'next'
import './globals.css'
import classNames from "classnames";
import {Gloock, Odor_Mean_Chey, Schibsted_Grotesk, Space_Mono} from "next/font/google";


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kotec666',
  description: '-',
}


const spaceMono = Space_Mono({
  variable: "--spaceMono",
  weight: ["400"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
})

const chey = Odor_Mean_Chey({
  variable: "--chey",
  weight: ["400"],
  subsets: ["khmer", "latin"],
  display: "auto"
})

const glock = Gloock({
  variable: "--glock",
  weight: "400",
  subsets: ["latin"],
  display: "auto",
})

const grotesk = Schibsted_Grotesk({
  variable: "--grotesk",
  weight: "400",
  subsets: ["latin"],
  display: "auto",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="ru" className={classNames(spaceMono?.variable, glock?.variable, grotesk?.variable, chey?.variable)}>
          <body>{children}</body>
        </html>
  )
}
