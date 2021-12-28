import React, { useState } from 'react';

// This is a functional component. I destructure data passed into the component
// (props) to further simplify any further code.
const Accordian = ({ title, content, password }) => {
	
	// These are variables to help manage each components state.
	// The parameter passed into useState() is the default state I want
	// each component to start with.
	const [isActive, setIsActive] = useState({
		password: false,
		clickable: false,
	});

	// A function I stole from mozilla I believe. I hashed password to each section
	// so that if a person was to deobfuscate the data they wouldn't immediately have the
	// password to each section.
	async function sha256(message) {
		// encode as UTF-8
		const msgBuffer = new TextEncoder().encode(message);

		// hash the message
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

		// convert ArrayBuffer to Array
		const hashArray = Array.from(new Uint8Array(hashBuffer));

		// convert bytes to hex string
		const hashHex = hashArray
			.map((b) => b.toString(16).padStart(2, '0'))
			.join('');
		return hashHex;
	}

	// All keys put into the textbox pass through this function and
	// are hashed and compared to the hashed password.
	const checkPassword = async (event) => {
		// Simple comparison to check if the user password is the same as the data.js password
		if ((await sha256(event.target.value)) === password) {
			setIsActive({ clickable: true, password: true });
		} else {
			setIsActive({ ...isActive, password: false });
		}
	};

	return (
		<div className="accordion-item">
			{/* The isActive.clickable var toggles back and forth from true to false. The accordian only 
			expands if clickable and password are true inside the state, isActive. */}
			<div
				className="accordion-title"
				onClick={() =>
					setIsActive({ ...isActive, clickable: !isActive.clickable })
				}
			>
				<div>{title}</div>
				<input
					type="text"
					placeholder="Enter key"
					onChange={checkPassword}
					onSubmit={checkPassword}
					onLoad={checkPassword}
				></input>
				{/* Ternary operator that changes the sign on the accordian component based upon 
				the current state. Will change to a + if the password is set to true and clickable is true. */}
				<div>{isActive.clickable && isActive.password ? '-' : '+'}</div>
			</div>
			{/* The && ensures that the following code only executes if the first two 
			conditions evaluate to true. */}
			{isActive.clickable && isActive.password && (
				<div className="accordion-content">
					<p dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			)}
		</div>
	);
};

export default Accordian;
