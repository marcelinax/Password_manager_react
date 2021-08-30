import React from 'react';
import { createPasswordAndLogin } from '../state/userPasswordsAndLoginsSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export const PasswordManagerAddNewListItem = () => {
  const [appName, setAppName] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAppNameInput = (e) => {
    setAppName(e.target.value);
  };
  const handleIconUrlInput = (e) => {
    setIconUrl(e.target.value);
  };
  const handleLoginInput = (e) => {
    setLogin(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const addNewPasswordManagerItem = () => {
    const newPasswordManagerItem = {
      appName,
      iconUrl,
      login,
      password,
    };
    dispatch(createPasswordAndLogin(newPasswordManagerItem));
    history.push('/password-manager');
  };

  return (
    <div className="password-manager-add-new-list-item">
      <div className="top-menu">
        <button>
          <i
            className="bx bx-x"
            onClick={() => {
              history.push('/password-manager');
            }}
          />
        </button>
        <p>Add a Password</p>
        <button>
          <i
            className="bx bx-check"
            onClick={() => {
              history.push('/password-manager');
            }}
          ></i>
        </button>
      </div>
      <div className="password-manager-form">
        <div className="password-manager-form-input">
          <label>APP NAME</label>
          <input value={appName} onChange={handleAppNameInput}></input>
          <i className="bx bxs-x-circle" onClick={() => setAppName('')}></i>
        </div>
        <div className="password-manager-form-input">
          <label>APP ICON URL</label>
          <input value={iconUrl} onChange={handleIconUrlInput}></input>
          <i className="bx bxs-x-circle" onClick={() => setIconUrl('')}></i>
        </div>
        <div className="password-manager-form-input">
          <label>LOGIN</label>
          <input value={login} onChange={handleLoginInput}></input>
          <i className="bx bxs-x-circle" onClick={() => setLogin('')}></i>
        </div>
        <div className="password-manager-form-input">
          <label>PASSWORD</label>
          <input
            type={seePassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordInput}
          ></input>
          <i
            className="bx bx-show"
            onClick={() => {
              setSeePassword(!seePassword);
            }}
          ></i>
        </div>
      </div>
      <button onClick={addNewPasswordManagerItem}>Create a new password</button>
    </div>
  );
};
