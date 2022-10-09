import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

import searchTriggered from './search-triggered';
import {handleSearch} from './search-results';


searchTriggered(handleSearch);


