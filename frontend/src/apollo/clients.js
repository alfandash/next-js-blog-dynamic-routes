import { ApolloClient, inMemoyCache, createHttpLink, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  resultCaching: false,
})

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all"
  }
}

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`
})

const client = new ApolloClient({
  link,
  cache,
  defaultOptions
})

export default client