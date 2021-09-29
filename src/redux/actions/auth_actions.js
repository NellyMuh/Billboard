import { signin, signup } from '../../services/firebase_service';

export const signupAction = (email, password, fname, lname, genger, phone, nid) => async dispatch => {
    try {
        dispatch({ type: 'LOADING', payload: true });

        const response = await signup(email, password, fname, lname, genger, phone, nid);
        dispatch({ type: 'SIGNUP_ACTION', payload: response });
        dispatch({ type: 'LOADING', payload: false });

        return true;
    } catch (error) {
        dispatch({ type: 'LOADING', payload: false });
        return false;
    }
};

export const signinAction = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'LOADING', payload: true });

        const response = await signin(email, password);
        dispatch({ type: 'SIGNIN_ACTION', payload: response });
        dispatch({ type: 'LOADING', payload: false });

        return true;
    } catch (error) {
        dispatch({ type: 'LOADING', payload: false });
        return false;
    }
};