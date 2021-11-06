import Navigation from "../components/Navigation";
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Navigation/>

        <Component {...pageProps} />
      </>
  )

}
export default MyApp
