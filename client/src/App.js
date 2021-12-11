import ApolloClient from "@apollo/client";
import { ApolloProvider} from "@apollo/client";

// components
import ProyectList from "./components/ProyectList";

// Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Administrador de Proyectos </h1>
        <ProyectList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
