import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

// const API_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";
const API_URL = process.env.STRAPI_URL || "https://striking-book-d6cfbf6b64.strapiapp.com/"

export const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
       <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </AppProvider>
    </ApolloProvider>
  );
}