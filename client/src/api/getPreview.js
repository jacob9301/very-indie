import apiFetch, { apiPost } from "./fetchWrapper";

const route = '/getpreview';

const getPreview = async (artistId) => {

    const payload = {
        artistId: artistId
    }

    const response = await apiPost(route, payload);

    if (response.error) {
        console.log('getAPreview.js', response.error)
        return {error: response.error};
    } else {
        return response;
    }

}

export default getPreview;