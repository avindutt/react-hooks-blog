import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

export default function PostDetail() {

  const [post, setPost]  = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    firestore.collection('posts').doc(postId).get().then((snapshot) => {
      console.log('snapshot', snapshot.data());
      setPost(snapshot.data());
    })
  })

  return (
    <div className='post-details'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      </div>
  )
}