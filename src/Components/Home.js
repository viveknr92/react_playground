import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.header}>
            <Link to='/app'>App</Link>
            <Link to='/child'>Child</Link>
            <Link to='/todo'>Todo App</Link>
            <Link to='/vehicletracker'>Vehicle Tracker</Link>
            <Link to='/simpleCounter'>Simple Counter</Link>
        </div>
    )
}

export default withRouter(Home)