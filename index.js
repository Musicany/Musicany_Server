const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('API Running');
});

const ApiRouter = require('./routes/');
app.use('/', ApiRouter);

const db = require('./models');

db.sequelize.sync().then(() => {
	app.listen(8080, () => console.log(`Server started on port ${8080}`));
});
