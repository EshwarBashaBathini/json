import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostItem from '../postItem';
import "./index.css"

const Posts = () => {
    const [posts, setPosts] = useState([]);
   

    useEffect(() => {
        // Fetch user details
        // Fetch posts for that user
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                
            });
    }, );

    return (
       <div className='container'>
            <ul className='post-list'>
            {posts.map(post => (
                <PostItem postDetails={post} key={post.id} />
            ))}
        </ul>
       </div>
    )

}

export default Posts