import { Provider } from "@skynexui/components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp;
