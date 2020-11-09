import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync, getData } from '../actions/actionCreator'

export const Counter = ({ count, fetchData, loading, error, decrement, incrementAsync, data }) => {
    useEffect(() => {
        fetchData(count)
    }, [fetchData, count])
    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => incrementAsync(10)}
            >
            +
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => decrement()}
            >
            -
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => fetchData(count)}
            >
            GET DATA AGAIN
            </button>
            {loading ? 'Loading...' : data.title}
            {error ? error : ''}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
        data: state.counter.data,
        loading: state.counter.loading, 
        error: state.counter.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        incrementAsync: (amount) => dispatch(incrementAsync(amount)),
        fetchData: (userId) => dispatch(getData(userId))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Counter)