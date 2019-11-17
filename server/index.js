const db = require('./db/index');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const physicians = [
	{ _id: 1, firstname: 'Julius', lastname: 'Hibbert', email: 'hibbert@notablehealth.com' },
	{ _id: 2, firstname: 'Algernop', lastname: 'Krieger', email: 'krieger@notablehealth.com' },
	{ _id: 3, firstname: 'Nick', lastname: 'Rivera', email: 'rivera@notablehealth.com' },
];

const appointments = [
	{
		name: 'Sterling Archer',
		kind: 'New Patient',
		time: new Date('November 16, 2019 08:00:00'),
	},
	{
		name: 'Cyril Figis',
		kind: 'Follow Up',
		time: new Date('November 16, 2019 08:30:00'),
	},
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/physicians', (req, res) => {
	res.json({ result: physicians });
});
app.get('/appointments/:physicianId', (req, res) => {
	const { physicianId } = req.params;
	res.json({ result: appointments });
});

app.listen(port, () => console.log('Example app listening on port ' + port));
