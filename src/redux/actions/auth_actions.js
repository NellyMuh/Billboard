import { signin, signup } from '../../services/firebase_service';

export const signupAction = (email, password, fname, lname, genger, phone, nid) => async dispatch => {
    try {
        const response = await signup(email, password, fname, lname, genger, phone, nid);
        dispatch({ type: 'SIGNUP_ACTION', payload: response });
        return true;
    } catch (error) {
        return false;
    }
};

export const signinAction = (email, password) => async dispatch => {
    try {
        const response = await signin(email, password);
        dispatch({ type: 'SIGNIN_ACTION', payload: response });
        return true;
    } catch (error) {
        return false;
    }
};