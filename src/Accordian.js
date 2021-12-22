import React, { useState } from 'react';

const Accordian = ({ title, content, password }) => {
	const [isActive, setIsActive] = useState({
		password: false,
		clickable: false,
	});

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

	const checkPassword = async (event) => {
		console.log(isActive);
		if ((await sha256(event.target.value)) === password) {
			setIsActive({ clickable: true, password: true });
		} else {
			setIsActive({ ...isActive, password: false });
		}
	};

	return (
		<div className="accordion-item">
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
				<div>{isActive.clickable && isActive.password ? '-' : '+'}</div>
			</div>
			{isActive.clickable && isActive.password && (
				<div className="accordion-content">
					<p dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			)}
		</div>
	);
};

export default Accordian;
