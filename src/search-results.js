// TODO:
// export new handleSearch 
// show the loading spinner
// await search results 
// remove the spinner
// WORK FLOW:
// search triggered->
// pass searchTerm to handle search (which shows the spinner)-> 
// makes search request-> 
// hides spinner when request completes 

import getSearchResults from "./get-search-results";

// export default handleSearch(async searchTerm => {
//     const loader = "./public/loader.gif";

//     const results = await getSearchResults(searchTerm);
//     Promise.resolve()
//     return 

// })
//TODO: 
// create the markup as a string or an HTML Element 
// for all of the result thumbs from get-search-results
// Add to search-results div 
// HTML THUMBS <a href="#">
       // <img src="placeholder.png" />
       // </a>
const makeSearchResult = searchResult => `
<a href="#">
    <img src="${searchResult.thumb}" />
</a>
`;
export const handleSearch = async searchTerm => {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '<img src="loader.gif" />';
    const urls = await getSearchResults(searchTerm);
    const html = urls.reduce((currentString,searchResult)=> {
        return currentString + makeSearchResult(searchResult);
    }, '');
    searchResults.innerHTML = html;
}
