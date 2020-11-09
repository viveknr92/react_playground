import React, {useEffect} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementAsync, getData } from '../actions/actionCreator'

export const Counter = (props) => {
    const { count, data, loading, error } = useSelector((state) => (state.counter))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData(count))
    }, [count])
    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(incrementAsync(10))}
            >
            +
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
            -
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(getData(count))}
            >
            GET DATA AGAIN
            </button>
            {loading ? 'Loading...' : data.title}
            {error ? error : ''}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         count: state.counter.count,
//         data: state.counter.data,
//         loading: state.counter.loading, 
//         error: state.counter.error
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement()),
//         incrementAsync: (amount) => dispatch(incrementAsync(amount)),
//         fetchData: (userId) => dispatch(getData(userId))
//     }
// }

export default connect () (Counter)