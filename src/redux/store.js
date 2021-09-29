import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducers from './reducers/auth_reducers';
import billboardReducers from './reducers/billboard_reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    authReducers,
    billboardReducers
});

const middleware = [thunk];

export default createStore(rootReducer,applyMiddleware(...middleware));