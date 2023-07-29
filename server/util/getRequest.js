const apiRequest = require('./axiosWrapper');

const getRequest = async (url, token) => {

    const options = {
        url: url,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };

    const response = await apiRequest(options);
    return response;

};

module.exports = getRequest;

