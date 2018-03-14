import {createStore} from 'redux';
import reducers from './reducers/reducers';
/** Show redux with redux devtools*/
let store = createStore(reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);
module.exports = store;
