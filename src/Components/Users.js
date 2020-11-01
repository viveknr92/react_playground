import React, {useState, useEffect} from 'react';
const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        // const userId = 1
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const posts = await response.json()
        const sortedposts = posts.sort((pa, pb) => {
            return (pa.title > pb.title)? 1 : (pa.title < pb.title ? -1 : 0)  
        })
        const top10 = sortedposts.slice(0, 10)
        console.log('sortedposts', top10)
        setUsers(top10)
    }

    const ListUsers = () => {
        return users.map((user) => {
            return (
                <div key={user.id}>
                    {user.title}
                </div>
            )
        })
    }

    return (
        <>
           <ListUsers />
        </>
    )
}

export default Users