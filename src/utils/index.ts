import { Photo } from "../types";

const BASE_URL = "https://www.flickr.com/services/rest/";

const params = {
    METHODS: {
        search: "flickr.photos.search",
        profile: "flickr.profile.getProfile"
    },
    APIKEY: "e58eea44e93e315e3e2a50fb10da139c", // ONLY for demo purposes. Ideally, the api key would need to be stored securely (e.g. as an .env variable)
    TAGS: "lithuania",
    EXTRAS: "owner_name",
    FORMAT: "json",
    NOJSONCALLBACK: 1,
    PAGESIZE: 20,
};


export const constructURL = (page: number | null, userId: string | null ): string => {
    let url = `${BASE_URL}?api_key=${params.APIKEY}&format=${params.FORMAT}&nojsoncallback=${params.NOJSONCALLBACK}`;

    // API reference: https://www.flickr.com/services/api/flickr.photos.search.html
    //                https://www.flickr.com/services/api/flickr.profile.getProfile.html
    if (page) url += `&method=${params.METHODS.search}&tags=${params.TAGS}&extras=${params.EXTRAS}&page=${page}&per_page=${params.PAGESIZE}`;
    if (userId) url += `&method=${params.METHODS.profile}&user_id=${userId}`;

    return url;
}

export const getPhoto = (photo: Photo, thumbnail: boolean = true): string => {
    const {server, id, secret} = photo;
     
    // API reference: https://www.flickr.com/services/api/misc.urls.htm
    let url = `https://live.staticflickr.com/${server}/${id}_${secret}${thumbnail ? '_m' : '_c'}.jpg`;
    return url;
}

// Higher order function for async error handlinz
export const catchErrors = (fn: any) =>
    function (...args: any) {
        return fn(...args).catch((err: any) => {
            console.error(err);
        });
    };