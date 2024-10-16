const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
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
