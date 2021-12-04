import { combineReducers, createStore } from 'redux';
import { ContactReducer, FeatureReducer } from './reducer';

const rootReducer = combineReducers({
    ContactReducer,
    FeatureReducer
});

const store = createStore(rootReducer);

export default store;