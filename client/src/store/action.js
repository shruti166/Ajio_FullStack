import React from 'react';

export const ImageAction = (data, dispatch) => {
    dispatch({
        type: "setImage",
        payload: data,
    })
}

export const Add = (data, dispatch) => {
    dispatch({
        type: "add",
        payload: data,
    })
}

export const Change = (data, dispatch) => {
    dispatch({
        type: "change",
        payload: data,
    })
}

export const deleteCartAction = (data, dispatch, index) => {
    data.splice(index, 1);
    let arr = [...data];
    dispatch({
        type: "DELETE",
        payload: arr,
    })
}

export const updateQunatitySize = (data, dispatch) => {
    let arr = [...data];
    dispatch({
        type: "DELETE",
        payload: arr,
    })
}
export const updateAction = (data, dispatch) => {
    
    dispatch({
        type: "RefreshPage",
        payload: data,
    })
}

export const updateCart = (data, dispatch) => {
    
    dispatch({
        type: "CART",
        payload: data,
    })
}
export const logInAction = (dispatch) => {
    console.log("ACTION");
    dispatch({
        type: "LOGIN",
       
    })
}
