import apiFetch from "./fetchWrapper";

const route = '/getartists';

const getArtists = async (genreIndex, minFollowers, maxFollowers) => {

    const payload = {
        genreIndex: genreIndex,
        min: minFollowers,
        max: maxFollowers
    }

    const options = {
        method: 'POST',
        headers: {
            'authorisation': ('Bearer ' + localStorage.getItem('ua_access_token')),
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    const response = await apiFetch(route, options);

    if (response.error) {
        console.log('getArtists.js', response.error)
        return {error: response.error};
    } else {
        return response;
    }
}

export default getArtists;