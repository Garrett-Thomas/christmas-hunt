import './App.css';
import Accordian from './Accordian';
import { JSON36 } from 'weird-json';
import { accordionData } from './data';
import React from 'react';

function App() {
	return (
		<div className="App">
			<h1>Christmas Virtual Scavenger Hunt!</h1>
			<p>
				Welcome to the most nuanced scavenger hunt you will ever be a part of!
				The stakes are high for this scavenger hunt. The winner of the hunt (the
				first person to complete the last section) will receive a wonderful,
				personal gift from yours truly. If that isn't motivating, then the
				winner choose to receive $100. This is designed to be a competition.
				This will be a learning experience for all of you and it wasn't designed
				to be easy. Each one of you can complete this if you work towards it.
				With each section I've linked resources to assist you on your path. I
				personally will only give hints on completing the first task and help to
				install necessary software. Prove to everyone how smart you are and
				claim that prize! The key to the first section is{' '}
				<code>"tistheseason"</code>.
			</p>
			{accordionData.map(({ title, content, password }, index) => (
				<Accordian
					key={index}
					title={JSON36.parse(title)}
					content={JSON36.parse(content)}
					password={JSON36.parse(password)}
				/>
			))}
		</div>
	);
}

export default App;
