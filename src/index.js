import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import searchTriggered from './search-triggered';

searchTriggered(term => {
    console.log('term: ', term);
});

// // ASYNC CODE
/*    const result = fetch('https://api.giphy.com/v1/gifs/search?api_key=bySi0Slj9c22Hx4JYjwK4nN214iAFzYK&q=dalek');
    result // PROMISE CHAINING 
        .then((result) => result.json())
        .then(searchResults => console.log(searchResults))
        .catch(e => alert(e.message));
*/
// //API CALL -> https://api.giphy.com/v1/gifs/search?api_key=bySi0Slj9c22Hx4JYjwK4nN214iAFzYK&q=dalek

const makeRequest = async () => {
    const result = await fetch('https://api.giphy.com/v1/gifs/search?api_key=bySi0Slj9c22Hx4JYjwK4nN214iAFzYK&q=dalek');
    const searchResults = await result.json();
    console.log(searchResults);
};

makeRequest();
async function sayMyName () {

    return 'Well paid geek';
}
window.sayMyName = sayMyName;