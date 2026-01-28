import './index.css'
import { useNavigate } from 'react-router-dom';

const Users = (props) => {
    const { userDetails } = props
    const { email, id, name, phone, username, website, address = {}, company = {} } = userDetails
    const { suite, street, city, zipcode } = address
    const navigate = useNavigate();

    const onPostNav = (id) => {
        navigate(`/posts/${id}`)
        console.log("Triggered", id); 
    }
    


    return (
        <li className='list-item'>
            
            <div className='profile'>
                <p><b>Name:</b> {name}</p>
                <p><b>Phone Number:</b> {phone}</p>
                <p><b>Username:</b> {username}</p>
                <p><b>Email:</b>{email}</p>
                <p><b>Website:</b> {website}</p>
            </div>
            <br/>
            <div className='profile'>
                <h4>
                    Address:-
                </h4>
                <p>{suite}, {street}, {city}, {zipcode}</p>
            </div>
            <br/>
            <div className='profile'>
                <h4>Company Details:-</h4>
                <p><b>Name: </b>{company.name}</p>
                <p><b>Branch: </b>{company.bs}</p>
                <p><b>CatchPhrase: </b>{company.catchPhrase}</p>
                
            </div>
            <button className='btn' onClick={() => onPostNav(id)}  type='button' >View Posts</button>

        </li>
    )
}

export default Users 