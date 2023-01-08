import { reactive } from 'vue'

export const store = reactive({
    albums: [],
    apiURL: "https://shazam.p.rapidapi.com/albums/get-related-artist"
});