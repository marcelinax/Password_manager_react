import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewMasterPassword } from '../state/masterPasswordSlice';

export const PasswordManagerChangeMasterPassword = () => {
	const history = useHistory();
	const [newPinInput, setNewPinInput] = useState('');
	const dispatch = useDispatch();

	const renderButtons = () => {
		const buttons = [];
		buttons.push(
			<button
				className="change-master-password-button change-master-password-button-hidden"
				key={'hidden'}
			>
				Hidden
			</button>
		);
		buttons.push(
			<button
				className="change-master-password-button"
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
				className="change-master-password-button change-master-password-button-with-icon"
				onClick={() => {
					removeDigitFromPinInput();
				}}
				key={-1}
			>
				<i className="bx bxs-tag-x"></i>
			</button>
		);
		for (let i = 1; i < 10; i++) {
			buttons.push(
				<button
					className="change-master-password-button"
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
		for (let i = 0; i < 4; i++) {
			inputDigits.push(<div key={i} className="password-manager-change-master-password-digit">
				<p>{newPinInput[i]}</p>
			</div>);

		}
		return inputDigits;
	};

	const addPinToInput = (digit) => {
		if (newPinInput.length > 3) return;
		setNewPinInput(newPinInput + digit);
	};

	const removeDigitFromPinInput = () => {
		setNewPinInput(newPinInput.substring(0, newPinInput.length - 1));
	};

	const changePin = () => {
		dispatch(setNewMasterPassword(newPinInput));
		alert('Your master password has been change!');
		history.push('/password-manager');

	};

	return (<div className="password-manager-change-master-password">
			<div className="password-manager-change-master-password-top-menu">
				<button>
					<i
						className="bx bx-x"
						onClick={() => {
							history.push('/password-manager');
						}}
					/>
				</button>
				<p>Change your master password</p>
				<button>
					<i
						className="bx bx-check"
						onClick={changePin}
					/>
				</button>


			</div>
			<input maxLength={4} disabled value={newPinInput}/>
			<div className="password-manager-change-master-password-digits">{renderInputDigits()}</div>
			<div className="password-manager-change-master-password-buttons">{renderButtons()}</div>

		</div>
	);
};
