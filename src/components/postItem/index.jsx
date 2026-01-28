import "./index.css"
import { useEffect, useState } from "react"
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const PostItem = (props) => {
    const { postDetails } = props
    const [userDetails, setUser] = useState([])
    const { title, id, userId, body } = postDetails
    const navigate = useNavigate();
    
    const onProfile = () => {
        navigate(`/users/${userId}`)
    }
        

    console.log(userDetails)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
    },[userId])

    return (
        <li className="post-item">
            <div onClick={onProfile} className="profile-container">
                <FaRegCircleUser size={20}/>
                <p>{userDetails.name}</p>
            </div>
            <h3 className="h7"><b className="h7">{title}</b></h3>
            <p>{body}</p>
        </li>
    )

}

export default PostItem 