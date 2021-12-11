import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider} from "@apollo/client";
import Ownfooter from "./components/Footer/Ownfooter";

// components
import ProyectList from "./components/ProyectList";

// Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Administrador de Proyectos </h1>
          <ProyectList/>
        </div>
      </ApolloProvider>
      
    <Ownfooter />
    </div>
  );
}

export default App;
