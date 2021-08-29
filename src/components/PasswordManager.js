import { PasswordManagerList } from "./PasswordManagerList";
import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const PasswordManager = ({ passwordManagerList }) => {
  const history = useHistory();

  return (
    <div className="password-manager">
      <div className="password-manager-top-menu">
        <button>
          <i className="bx bx-cog"></i>
        </button>
        <p>Passwordz</p>
        <button
          onClick={() => {
            history.push("/password-manager-add-new-password");
          }}
        >
          <i className="bx bx-plus"></i>
        </button>
      </div>
      <PasswordManagerList passwordManagerList={passwordManagerList} />
    </div>
  );
};
