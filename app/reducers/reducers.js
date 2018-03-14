import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';


var reducers = combineReducers({cartReducer, productsReducer});
module.exports = reducers;