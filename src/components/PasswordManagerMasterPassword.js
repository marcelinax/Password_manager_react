import React, { useEffect, useRef, useState } from "react";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const PasswordManagerMasterPassword = () => {
  const [pinInput, setPinInput] = useState("");
  const inputDigitsRef = useRef();
  const history = useHistory();
  const masterPassword = useSelector(
    // @ts-ignore
    (state) => state.masterPassword.masterPassword
  );

  const renderButtons = () => {
    const buttons = [];
    buttons.push(
      <button
        className="master-password-button master-password-button-hidden"
        key={"hidden"}
      >
        Hidden
      </button>
    );
    buttons.push(
      <button
        className="master-password-button"
        key={0}
        onClick={() => {
          addPinToInput(0);
        }}
      >
        0
      </button>
    );
    buttons.push(
      <button
        className="master-password-button master-password-buttonmaster-password-button-with-icon"
        onClick={removeDigitFromPinInput}
        key={-1}
      >
        <i className="bx bxs-tag-x"></i>
      </button>
    );
    for (let i = 1; i < 10; i++) {
      buttons.push(
        <button
          className="master-password-button"
          key={i}
          onClick={() => {
            addPinToInput(i);
          }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const renderInputDigits = () => {
    const inputDigits = [];
    for (let i = 1; i <= 4; i++) {
      inputDigits.push(
        <div
          key={i}
          className={
            pinInput.length >= i ? "input-digit--active" : "input-digit"
          }
        ></div>
      );
    }
    return inputDigits;
  };

  const addPinToInput = (digit) => {
    if (pinInput.length > 3) return;
    setPinInput(pinInput + digit);
  };

  const removeDigitFromPinInput = () => {
    setPinInput(pinInput.substring(0, pinInput.length - 1));
  };

  const animateShaking = () => {
    inputDigitsRef.current.classList.add("animate-shake");
    setTimeout(() => {
      inputDigitsRef.current.classList.remove("animate-shake");
    }, 800);
  };

  const checkIfPasswordIsCorrect = () => {
    if (+pinInput === masterPassword) history.push("/password-manager");
    else if (pinInput.length === 4) {
      setPinInput("");
      animateShaking();
    }
  };

  useEffect(() => {
    checkIfPasswordIsCorrect();
  }, [pinInput]);

  return (
    <div className="master-password">
      <i className="bx bxs-lock lock"></i>
      <input maxLength={4} disabled value={pinInput}></input>
      <div className="input-digits" ref={inputDigitsRef}>
        {renderInputDigits()}
      </div>
      <div className="master-password-buttons">{renderButtons()}</div>
    </div>
  );
};
