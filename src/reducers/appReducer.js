const initialState = {
    count: 1,
    loading: false,
    data: {},
    error: null
}
export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT' : {
            return {
                ...state,
                count: action.payload ? state.count + action.payload : state.count+1
            }
        }
        case 'DECREMENT' : {
            return {
                ...state,
                count: state.count-1
            }
        }
        case 'FETCHDATA_REQUEST': {
            return {
                ...state,
                loading: true,
                data: {},
                error: ''
            }
        }
        case 'FETCHDATA_SUCCESS': {
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case 'FETCHDATA_ERROR': {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: return state  
    }
}