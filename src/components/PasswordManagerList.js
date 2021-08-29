import { PasswordManagerListItem } from "./PasswordManagerListItem";
import React from "react";
import { removePasswordAndLogin } from "state/userPasswordsAndLoginsSlice";
import { useDispatch } from "react-redux";

export const PasswordManagerList = ({ passwordManagerList }) => {
  const dispatch = useDispatch();

  const renderPasswordManagerItems = () => {
    return passwordManagerList.map((passwordManagerItem) => (
      <PasswordManagerListItem
        appIcon={passwordManagerItem.iconUrl}
        appName={passwordManagerItem.appName}
        login={passwordManagerItem.login}
        key={passwordManagerItem.id}
        password={passwordManagerItem.password}
        deletePasswordManagerItem={() =>
          dispatch(removePasswordAndLogin(passwordManagerItem.id))
        }
      />
    ));
  };

  return (
    <div className="password-manager-list">{renderPasswordManagerItems()}</div>
  );
};
