const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV == 'production') {
	app.use(express.static('build/'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
	});
}

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});