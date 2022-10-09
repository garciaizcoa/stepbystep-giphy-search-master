import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

import searchTriggered from './search-triggered';
import getSearchResults from './get-search-results';


searchTriggered(async searchTerm => {
    const results = await getSearchResults(searchTerm);
    console.log(results);
});

