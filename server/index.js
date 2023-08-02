const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const getToken = require('./routes/getToken');
const getArtists = require('./routes/getArtists');
const getGenres = require('./routes/getGenres');
const getAccessToken = require('./middleware/getAccessToken');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/gettoken', getToken);

//move token to header
app.post('/getgenres', getAccessToken, getGenres);
app.post('/getartists', getAccessToken, getArtists);

app.listen(5000, () => {console.log('server started on port 5000')});