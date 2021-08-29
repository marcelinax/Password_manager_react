import { BrowserRouter, Route, Switch } from "react-router-dom";

import { PasswordManagerMasterPassword } from "./components/PasswordManagerMasterPassword";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PasswordManagerMasterPassword />
        </Route>
        <Route path="/password-manager"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
