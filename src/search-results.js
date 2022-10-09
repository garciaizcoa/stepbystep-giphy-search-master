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
export const handleSearch = async searchTerm => {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '<img src="loader.gif" />';
    await getSearchResults(searchTerm);
    searchResults.innerHTML = '';
    console.log(searchTerm);
}