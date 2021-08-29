import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import { PasswordManager } from "./components/PasswordManager";
import { PasswordManagerAddNewListItem } from "./components/PasswordManagerAddNewListItem";
import { PasswordManagerMasterPassword } from "./components/PasswordManagerMasterPassword";
import { useSelector } from "react-redux";

function App() {
  const passwordManagerList = useSelector(
    // @ts-ignore
    (state) => state.userPasswordsAndLogins.userPasswordsAndLogins
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PasswordManagerMasterPassword />
        </Route>
        <Route path="/password-manager">
          <PasswordManager passwordManagerList={passwordManagerList} />
        </Route>
        <Route path="/password-manager-add-new-password">
          <PasswordManagerAddNewListItem />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
