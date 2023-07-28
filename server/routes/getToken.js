const dotenv = require('dotenv');
dotenv.config();
const apiRequest = require('../util/axiosWrapper');

const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: { grant_type: 'client_credentials' }
};

const getToken = async (req, res) => {

    const response = await apiRequest(authOptions);
    return res.json(response);

};

module.exports = getToken;