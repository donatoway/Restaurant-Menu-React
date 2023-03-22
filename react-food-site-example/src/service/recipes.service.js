import {recipes_URL, generateUrl } from "./url";
import { getService } from "./http.service";
const getPopularService = async (n=10, tags = "vegetarian/dessert" ) =>
{
    const params = [
        {key: 'number', value: 10},
        {key: 'tags', value: tags},
    ];
    const url = generateUrl(recipes_URL, params);
    return await getService(url);
}
export {getPopularService}