import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducers from './reducers/auth_reducers';
import billboardReducers from './reducers/billboard_reducers';
import thunk from 'redux-thunk';
import applicationsReducers from './reducers/applications_reducers';

const rootReducer = combineReducers({
    authReducers,
    billboardReducers,
    applicationsReducers
});

const middleware = [thunk];

export default createStore(rootReducer,applyMiddleware(...middleware));