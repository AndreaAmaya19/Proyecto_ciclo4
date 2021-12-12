import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider} from "@apollo/client";
import { Ownheader } from './components/Header/Ownheader'
import Ownfooter from "./components/Footer/Ownfooter";

// components
import ProyectList from "./components/ProyectList";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';

// Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    // <div className="App">
    // <Ownheader/>
    //   <ApolloProvider client={client}>
    //     <div className="App">
    //       <h1>Administrador de Proyectos </h1>
    //       <ProyectList/>
    //     </div>
    //   </ApolloProvider>
      
    // <Ownfooter />
    // </div>
  );
}

export default App;
