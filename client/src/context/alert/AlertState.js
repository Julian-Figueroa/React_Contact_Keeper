import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { REMOVE_ALERT, SET_ALERT } from '../types';

const AlertState = props => {
  const initState = [];

  const [state, dispatch] = useReducer(alertReducer, initState);

  //SET ALERT
  const setAlert = (message, type, timeout = 5000) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type,
        id
      }
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id
        }),
      timeout
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
