import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const {isLoading,posts,error} = useSelector(state => state.post) 
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchPosts())
  },[])
  return (
  <div>
    <h1>Post View</h1>
    {isLoading && <h3>Loading...</h3>}
    {error && <h3>{error}</h3>}
    {posts && posts.map(post => {
        return <article>
            <h5>{post.id}</h5>
            <h5>{post.title}</h5>
        </article>
    })}
  </div>
  
    );
};

export default PostView;
