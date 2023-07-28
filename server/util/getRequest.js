const apiRequest = require('./axiosWrapper');

const getRequest = async (url, token) => {

    const options = {
        url: url,
        method: 'GET',
        header: {
            'Authorization': 'Bearer ' + token
        }
    };

    const response = await apiRequest(options);
    return res.json(response);

};

