const baseURL = "http://localhost:5000";

const apiFetch = async (route, options) => {

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

export default apiFetch;