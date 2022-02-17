import { ApolloProvider } from '@apollo/client'
import client from '../src/apollo/clients'
import '../src/styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
