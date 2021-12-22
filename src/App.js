import './App.css';
import Accordian from './Accordian';
import { JSON36 } from 'weird-json';
import { accordionData } from './data';
import { backupData } from './backupdata';
import React from 'react';

function App() {
	let newData = `Your first task is to connect to a rasperry pi and search for a file named KEY.txt.
	You will connect to the rasperry pi over ssh with username <code>"thomas"</code> and password <code>"hotcinnamon"</code>.
	The ip address of the rasperry pi is <code>"192.168.86.33"</code>. Once connected, use the command line tool <code>find</code> to search the 
	filesystem for a file named <code>"KEY.txt"</code>. That file will contain the key for the next section.
	<div class="frame-container">
	<iframe width="476" height="200" src="https://www.youtube.com/embed/v45p_kJV9i4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<iframe width="476" height="200" src="https://www.youtube.com/embed/MkR_rqHzorM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>`;
	accordionData.forEach(({ title, content, password }) => {
		console.log(
			`Title: ${JSON36.parse(title)} \n Content: ${JSON36.parse(
				content
			)} \n Password: ${JSON36.parse(password)}`
		);
	});
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
			{backupData.map(({ title, content, password }, index) => (
				<Accordian
					key={index}
					title={title}
					content={content}
					password={password}
				/>
			))}
		</div>
	);
}

export default App;
