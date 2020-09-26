import { combineReducers } from 'redux'
import { childReducer } from './childReducer'
import { appReducer } from './appReducer'
const rootReducer = combineReducers({
    counter: appReducer,
    childReducer
})

export default rootReducer