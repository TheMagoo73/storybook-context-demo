import { CounterProvider } from '../lib/context/counter-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<CounterProvider><Component {...pageProps} /></CounterProvider>)
}

export default MyApp
