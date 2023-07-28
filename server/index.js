const express = require('express');
const cors = require('cors');
const getToken = require('./routes/getToken');

const app = express();

app.use(cors());

app.get('/gettoken', getToken);

app.listen(5000, () => {console.log('server started on port 5000')});