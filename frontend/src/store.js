
import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import getAllPizzasReducer from '../src/reducers/pizzaReducers';
import gamesReducer from "../src/reducers/payLoadExample";


 
const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  gamesReducer: gamesReducer
});

const initialState={}
const composeEnhancers = composeWithDevTools({})
const middleware = [thunk];
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(...middleware)))

export default store