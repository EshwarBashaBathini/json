import './index.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PostItem from '../postItem'
import Comment from '../Comment'



const PostDetails = () => {
    const { id } = useParams()
    const [comments, setComments] = useState([])
    const [post, setPost] = useState([])
    const [isloading, setLoading] = useState(true)


    useEffect(() => {

        const fetchComments = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            const data = await res.json()
            setComments(data)
            setLoading(false)
        }

        const fetchPost = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json()
            setPost(data)
        }




        fetchComments()
        fetchPost()
    }, [id])
    console.log(isloading)

    return (
        <div className='com-top-container'>
            {!isloading && <div className='com-top-container'>
                <div>
                    <PostItem postDetails={post} key={post.id} />
                    <h3>Comments :-</h3>

                </div>
                <ul>
                    {comments.map(comment => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </ul>
            </div>
            }
            {isloading &&

                <div className='loading'>

                    <p>Loading......</p>
                </div>
            }
        </div>
    )



}

export default PostDetails