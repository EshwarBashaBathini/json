import './index.css'
import { useEffect, useState } from 'react'
import Users from '../users'

const Home = () => {
    const [users, setUsers] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(data)
                console.log("hiiii is it working")
            })
    }, [])

    return (
        <Users userDetails={users} />
    )
}

export default Home
