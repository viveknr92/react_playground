import { fetchData } from './fetchData';

export const increment = (payload) => {
    return {
        type: 'INCREMENT',
        payload
    }
}

export const decrement = (payload) => {
    return {
        type: 'DECREMENT',
        payload
    }
}

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
      dispatch(increment(amount));
    }, 1000)
  }

export const getData = (userId) => async dispatch => {
    dispatch({type: 'FETCHDATA_REQUEST'})
    try {
        const data = await fetchData(`https://jsonplaceholder.typicode.com/todos/${userId}`)
        dispatch({type: 'FETCHDATA_SUCCESS', payload: data})
    } catch(err) {
        console.error('err', err.message)
        dispatch({type: 'FETCHDATA_ERROR', payload: err.message})
    }
}