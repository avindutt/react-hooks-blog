import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

export default function Home() {

  const[posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
    .collection('posts')
    .get()
    .then((snapshot) => {
      const newData = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      console.log('posts', newData);
      setPosts(newData);
    })
  }, []);
  

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Avin</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to = {`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  )
}