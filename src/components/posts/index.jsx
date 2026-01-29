import React, { useEffect, useState } from 'react';
import PostItem from '../postItem';
import "./index.css"

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isloading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            try {

                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                setPosts(data);
            } finally {
                setLoading(false)

            }


        };

        fetchPost();
    }, []);



    return (
        <div className='container'>
            {!isloading && (<ul className='post-list'>
                {posts.map(post => (
                    <PostItem postDetails={post} key={post.id} />
                ))}
            </ul>)}
            {isloading &&
                <div className='loading-container'>
                    <p>Loading......</p>
                </div>
            }
        </div>
    )

}

export default Posts