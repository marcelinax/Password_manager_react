import React from "react";
import { useRef } from "react";
import { useState } from "react";

export const PasswordManagerListItem = ({
  appIcon,
  appName,
  login,
  password,
  deletePasswordManagerItem,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const copyPassword = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(password);
    alert("The password was copied to the clipboard!");
  };

  return (
    <div
      className="password-manager-list-item"
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="password-manager-list-item-left">
        <div
          className="password-manager-list-item-icon"
          style={{ backgroundImage: `url(${appIcon})` }}
        ></div>
        <div className="password-manager-list-item-info">
          <p className="app-name">{appName}</p>
          <p className="login">{login}</p>
        </div>
      </div>

      <i
        className={
          isClicked ? "bx bx-copy bx bx-copy-translate-left" : "bx bx-copy"
        }
        onClick={copyPassword}
      ></i>
      <div
        className={
          isClicked
            ? "password-manager-list-item-delete-btn password-manager-list-item-delete-btn--active"
            : "password-manager-list-item-delete-btn"
        }
      >
        <i
          className="bx bx-minus-circle"
          onClick={deletePasswordManagerItem}
        ></i>
      </div>
    </div>
  );
};
