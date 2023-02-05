import '@/styles/globals.css'
import {Tajawal} from "@next/font/google"

const tajawal = Tajawal({subsets:["latin"],weight:["200","300","400","800","900"]})
export default function App({ Component, pageProps }) {
  return (
    <main className={tajawal.className}>
      <Component {...pageProps} />
    </main>
  )
}
