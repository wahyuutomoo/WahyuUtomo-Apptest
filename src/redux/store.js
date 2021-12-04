import { combineReducers, createStore } from 'redux';
import { ContactReducer } from './reducer';

const rootReducer = combineReducers({
    ContactReducer
});

const store = createStore(rootReducer);

export default store;