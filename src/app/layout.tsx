import type { Metadata } from 'next'
import './globals.css'
import classNames from "classnames";
import {Gloock, Odor_Mean_Chey, Schibsted_Grotesk, Space_Mono} from "next/font/google";
import Script from "next/script";
import {Suspense} from "react";
import YandexMetrika from "@/app/YandexMetrika";
import {yandexMetricaId} from "@/consts/yandexMetricaId";


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kotec',
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
          <body>
          <Script id='metrika-counter' strategy='afterInteractive'>
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					   m[i].l=1*new Date();
					   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
					
					   ym(${yandexMetricaId}, "init", {
							clickmap:true,
							trackLinks:true,
							accurateTrackBounce:true
					   });`}
          </Script>
          <Suspense
              fallback={
                <div>
                  <img
                      src={`https://mc.yandex.ru/watch/${yandexMetricaId}`}
                      style={{ position: "absolute", left: "-9999px" }}
                      alt=''
                  />
                </div>
              }
          >
            <YandexMetrika />
          </Suspense>
          {children}
          </body>
        </html>
  )
}
