const baseURL = "http://localhost:5000";

const actuallyFetch = async (route, options) => {

    const fullURL = baseURL + route;

    try {

        const response = await fetch(fullURL, options);

        if (!response.ok) {
            throw new Error(response.status)
        }

        const responseJson = await response.json();

        return responseJson;

    } catch (err) {
        return {error: err};
    }
}

export const apiFetch = async (route) => {

    const options = {
        method: 'GET'
    }

    const result = await actuallyFetch(route, options);

    return result;
}

export const apiPost = async (route, payload) => {

    const options = {
        method: 'POST',
        headers: {
            'authorization': ('Bearer ' + localStorage.getItem('ua_access_token')),
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    const result = await actuallyFetch(route, options);

    return result;
    
}