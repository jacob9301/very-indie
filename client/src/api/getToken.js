import { apiFetch } from "./fetchWrapper";

const options = {
    method: 'GET'
}

const route = '/gettoken'

const getToken = async () => {
    
    const response = await apiFetch(route);

    if (response.error) {
        console.log('getToken.js',response.error);
    } else {
        localStorage.setItem('ua_access_token', response.access_token);
    }
}

export default getToken;