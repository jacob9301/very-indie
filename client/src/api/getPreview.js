import { apiPost } from "./fetchWrapper";

const route = '/getpreview';

const getPreview = async (artistId) => {

    const payload = {
        artistId: artistId
    }

    const response = await apiPost(route, payload);

    return response;

}

export default getPreview;