import './App.css';
import RouteList from "./Routes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {OidcProvider} from "@axa-fr/react-oidc";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import React from "react";

const configuration = {
  client_id: 'Attempt6OpenIddict_React',
  redirect_uri: 'http://localhost:3000',
  silent_redirect_uri: 'http://localhost:3000',
  scope: 'openid profile address email phone roles Attempt6OpenIddict',
  authority: 'https://localhost:44351',
  service_worker_relative_url:'/OidcServiceWorker.js',
  service_worker_only:true
}

function App() {
  return (
      <div className="App">

        <BrowserRouter>
          <OidcProvider configuration={configuration}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/admin" element={<Admin/>}/>
            </Routes>
          </OidcProvider>
        </BrowserRouter>

      </div>
  );
}

export default App;