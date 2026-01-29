import "./index.css"
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Comment = ({ comment }) => {
    const { id, name, body } = comment

    const navigate = useNavigate()
    const onProfile = () => {
        navigate(`/users/${userId}`)
    }

    return (
        <li className="comment-container">

            <div onClick={onProfile} className="profile-container">
                <FaRegCircleUser size={20} />

                <h3><b>{name}</b></h3>
            </div>

            <p>{body}</p>
        </li>
    )

}

export default Comment