import '@/styles/globals.css'
import { Poppins, Roboto_Slab } from 'next/font/google'

const poppins = Poppins({
  subsets:['latin'],
  weight:['400','500','600','700'],
  variable:'--font-poppins'
})

const roboto_slab = Roboto_Slab({
  weight:['300','400'],
  subsets:['latin'],
  variable:'--font-roboto-slab'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.className} ${poppins.variable} ${roboto_slab.variable}`}>
    <Component {...pageProps} />
  </main>
  )
}
