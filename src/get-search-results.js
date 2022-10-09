//item.images.downsized_still.url
// const makeRequest = async () => {
//     const result = await fetch('https://api.giphy.com/v1/gifs/search?api_key=bySi0Slj9c22Hx4JYjwK4nN214iAFzYK&q=dalek');
//     const searchResults = await result.json();
//     console.log(searchResults);
// };
// import searchTriggered from './search-triggered';
// searchTriggered(term => {
//     const searchTerm = term;
// });

import { async } from "regenerator-runtime";

// let array = [];
// const makeSearch = async (searchTerm)=>{
//     const result = await fetch('https://api.giphy.com/v1/gifs/search?api_key=bySi0Slj9c22Hx4JYjwK4nN214iAFzYK&q='+searchTerm);
//     const searchResults = await result.json();
//     const thumb = await result.json().item.images.downsized_still.url;
//     const full = await result.json().item.images.original.url;
    
// }
export default async query => {
    const results = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bySi0Slj9c22Hx4JYjwK4nN214iAFzYK&q=${query}`);
    const searchResults = await results.json();
    return searchResults.data.map(item => ({
        thumb: item.images.downsized_still.url,
        full: item.images.original.url
    }));
}