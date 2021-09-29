import { newBillboard, getBillboard, deleteBillboard, updateBillboard } from '../../services/firebase_service';

export const newBillboardAction = (location, type, price, dimensions) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    const response = await newBillboard(location, type, price, dimensions);
    // dispatch({ type: 'SET_BILLBOARDS_ACTION', payload: response });
    dispatch({ type: 'LOADING', payload: false });

    return true;
}

export const getBillboardAction = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    const response = await getBillboard();
    dispatch({ type: 'SET_BILLBOARDS_ACTION', payload: response });
    dispatch({ type: 'LOADING', payload: false });
    return true;
}

export const deleteBillboardAction = (id) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    const response = await deleteBillboard(id);
    dispatch({ type: 'DELETE_BILLBOARD_ACTION', payload: {id} });
    dispatch({ type: 'LOADING', payload: false });
    return true;
}

export const updateBillboardAction = (id, data) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    const response = await updateBillboard(id, data);
    dispatch({ type: 'UPDATE_BILLBOARD_ACTION', payload: {id, data} });
    dispatch({ type: 'LOADING', payload: false });
    return true;
}