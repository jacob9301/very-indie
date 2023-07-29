const axios = require('axios');

const apiRequest = async (options) => {

    try {

        const response = await axios(options);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response);
        }

    } catch (error) {

        const message = (error.status ? error.status : error.response.status);
        
        return {error: message};
    }
};

module.exports = apiRequest;