import {recipes_URL, generateUrl, recipesCompleSearchUrl, recipesInformationUrl } from "./url";
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

const getRecipesComplexSearchService = async (n = 10, cuisine = "",query = "") => {
    const params = [
        { key : 'number' , value : n},
        { key : 'cuisine', value : cuisine},
        { key : 'query', value : query}
    ];

    const url = generateUrl(recipesCompleSearchUrl,params);
    return await getService(url);
}

const getInformationService = async (id) => {
    const url = generateUrl(recipesInformationUrl(id));
    return await getService(url);
}

export {getPopularService, getRecipesComplexSearchService, getInformationService}