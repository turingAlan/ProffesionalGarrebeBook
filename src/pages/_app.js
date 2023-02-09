import '@/styles/globals.css'
import { ContextProvider } from '@/utils/Context'
import {Tajawal} from "@next/font/google"
import store from '../../store'
import { Provider } from 'react-redux'

const tajawal = Tajawal({subsets:["latin"],weight:["200","300","400","800","900"]})
export default function App({ Component, pageProps }) {
  return (
    <main className={tajawal.className}>
   <Provider store = {store}>
    <Component {...pageProps} />
   </Provider>
    </main>
  )
}
