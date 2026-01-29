import './index.css'
import { useEffect, useState } from 'react'
import { RiContactsFill } from "react-icons/ri"
import { FaPhoneAlt } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";

import { useParams } from 'react-router-dom';

import PostItem from '../postItem';

const Home = () => {

    const { userId } = useParams()
    const [user, setUser] = useState({})
    const [posts, setPost] = useState([])
    const [similarPosts, setSimilarPost] = useState([])
    const { email, id, name, phone, username, website, address = {}, company = {} } = user
    const { suite, street, city, zipcode, geo = {} } = address
    const { lat, lng } = geo
    const [isloading, setLoading] = useState(true)

    useEffect(() => {

        const fetchUserDetails = async () => {

            try {
                const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                const userdata = await userRes.json()
                setUser(userdata)

                const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                const postdata = await postRes.json()
                setPost(postdata)

                const allPostRes = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                const allData = await allPostRes.json()
                setSimilarPost(allData)
            } finally {
                setLoading(false)
            }
        }

        fetchUserDetails()



    }, [userId])

    return (
        <>
            {isloading && <div className='loading-pi'><p>Loading......</p></div>}
            {!isloading && <div className='top-container'>
                <div className='display-flex'>
                    <div className='container-box'>
                        <div className='box-profile'>
                            <h2 className='heading'>{name}</h2>
                            <p>{email}</p>
                        </div>
                        <div className='container-info'>
                            <div className='flex'>
                                <RiContactsFill />
                                <h4 className='flex-head' >Basic Information</h4>
                            </div>
                            <div className='content'>
                                <h3 className='content-heading' >User ID</h3>
                                <p className='content-para'>{id}</p>
                            </div>
                            <hr />
                            <div className='content'>
                                <h3 className='content-heading'>Full Name</h3>
                                <p className='content-para'>{name}</p>
                            </div>
                            <hr />
                            <div className='content'>
                                <h3 className='content-heading'>Username</h3>
                                <p className='content-para'>{username}</p>
                            </div>
                            <hr />
                            <div className='flex' >
                                <FaPhoneAlt />
                                <h4 className='flex-head'>Contact Information</h4>
                            </div>
                            <div className='content'>
                                <h3 className='content-heading'>Email ID</h3>
                                <p className='content-para'>{email}</p>
                            </div>
                            <hr />
                            <div className='content'>
                                <h3 className='content-heading'>Phone</h3>
                                <p className='content-para'>{phone}</p>
                            </div>
                            <hr />
                            <div className='content'>
                                <h3 className='content-heading'>Website</h3>
                                <p className='content-para'>{website}</p>
                            </div>
                            <hr />
                            <div className='flex' >
                                <IoLocationOutline />

                                <h4 className='flex-head' >Address</h4>
                            </div>
                            <div className='content'>
                                <h3 className='content-heading'>Street</h3>
                                <p className='content-para'>{street}</p>
                            </div>
                            <hr />
                            <div className='content'>
                                <h3 className='content-heading'>Suite</h3>
                                <p className='content-para'>{suite}</p>
                            </div>
                            <hr />
                            <div className='content'>
                                <h3 className='content-heading'>City</h3>
                                <p className='content-para'>{city}</p>
                            </div>
                            <hr />
                            <div className='content'>
                                <h3 className='content-heading'>Zipcode</h3>
                                <p className='content-para'>{zipcode}</p>
                            </div>
                            <hr />
                            <div className='content'>
                                <h3 className='content-heading'>Coordinates</h3>
                                <ul className='content-heading'><li className='content-para'>
                                    <h6>Latitude</h6>
                                    <p>{lat}</p>
                                </li>
                                    <li className='content-para'>
                                        <h6>Longitude</h6>
                                        <p>{lng}</p>
                                    </li></ul>

                            </div>
                            <hr />
                            <div className='flex' >
                                <LiaIndustrySolid />
                                <h4 className='flex-head' >Company</h4>
                            </div>
                            <div className='content'>
                                <h3 className='content-heading'>Company Name</h3>
                                <p className='content-para'>{company.name}</p>
                            </div>
                            <hr />
                            <div className='content'>
                                <h3 className='content-heading'>Catch Pharse</h3>
                                <p className='content-para'>{company.catchPhrase}</p>
                            </div>
                            <div className='content'>
                                <h3 className='content-heading'>Business Focus</h3>
                                <p className='content-para'>{company.bs}</p>
                            </div>
                        </div>


                    </div>
                    <div className='bottom-container'>
                        <h2>Posted by {name}</h2>
                        <ul className='ul-items-post'>
                            {posts.map(eachPost => (
                                <PostItem postDetails={eachPost} key={eachPost.id} />
                            ))}
                        </ul>
                    </div>
                </div>
                <h1>Similar Post</h1>
                <ul className='ul-items-similar'>
                    {similarPosts.map(eachPost => (
                        <PostItem postDetails={eachPost} key={eachPost.id} />
                    ))}
                </ul>
            </div>}
        </>
    )
}

export default Home
