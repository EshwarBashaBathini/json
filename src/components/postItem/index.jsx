import "./index.css"
import { useEffect, useState } from "react"
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";


const PostItem = (props) => {
    const { postDetails } = props
    const [userDetails, setUser] = useState([])
    const { title, id, userId, body } = postDetails
    const navigate = useNavigate();

    const onProfile = () => {
        navigate(`/users/${userId}`)
    }

    const onComment = () => {
        navigate(`/posts/${id}`)
    }


    useEffect(() => {

        const fetchPost = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const data = await res.json()
            setUser(data)
        }

        fetchPost()
    }, [userId])

    return (
        <li className="post-item">
            <div>
                <div onClick={onProfile} className="profile-container">
                    <FaRegCircleUser size={20} />
                    <p>{userDetails.name}</p>
                </div>
                <h3 className="h7"><b className="h7">{title}</b></h3>
                <p>{body}</p>
            </div>
            <hr />
            <div className="icons">

                <AiTwotoneLike className="icon-shake" size={17} />
                <AiTwotoneDislike className="icon-shake" size={17} />
                <FaCommentDots className="icon-shake" onClick={onComment} size={17} />
                <BiRepost className="icon-repost " size={17} />

            </div>



        </li>
    )

}

export default PostItem 