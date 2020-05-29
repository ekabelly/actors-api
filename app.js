require('dotenv').config({ path:'./env/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const conn = require('./db-wrap/conn');
const { errHanlder } = require('./middlewares/middlewares');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/events', require('./controllers/events.api'));

app.use((err, req, res, next) => errHanlder(err, req, res));

(async () => {
    await conn;
    app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`))
})();