import React from 'react'
import '../index.css'
import { firestore } from "../firebase";
import {Route, Routes} from 'react-router-dom'
import {Navbar, PostDetail, Home, CreatePost} from './index'

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route exact path ='/' element = {<Home/>} />
        <Route exact path ="/post/:postId" element = {<PostDetail/>} />
        <Route exact path ='/create-post' element = {<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;