const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// This evaluates to true if the production system has the NODE_ENV environment 
// variable set.
// Building a react project makes a folder called build with static assets.
if (process.env.NODE_ENV == 'production') {
	
	// This tells the app to use the build folder for static assets.
	app.use(express.static('build/'));

	// This tells the server to send the index.html file for any type of request.
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
	});
}

// This starts the server and listens for incoming requests on the given port.
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});