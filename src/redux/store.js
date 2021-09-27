import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducers from './reducers/auth_reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    authReducers
});

const middleware = [thunk];

export default createStore(rootReducer,applyMiddleware(...middleware));