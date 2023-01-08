import { reactive } from 'vue'

export const store = reactive({
    albums: [],
    artists: [],
    apiURL: "https://shazam.p.rapidapi.com/albums/get-related-artist"
});