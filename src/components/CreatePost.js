import { useState } from "react";
import { firestore } from '../firebase';
import {useFormInput} from '../components/hooks'

export default function CreatePost() {

  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content= useFormInput('');

  function handleSubmit (e) {
    e.preventDefault();

    console.log("title", title);
    console.log("subTitle", subTitle);
    console.log("content", content);

    firestore.collection('posts').add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date()
    });
  }
  
  return (
    <div className="create-post">
      <h1>CreatePost</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title.value} onChange = {title.onChange} />
        </div>

        <div className="form-field">
          <label>Sub-Title</label>
          <input value={subTitle.value} onChange = {subTitle.onChange} />
        </div>

        <div className="form-field">
          <label>Content</label>
          {/* below is the another way to do this using the spred operator */}
          <textarea {...content} ></textarea> 
        </div>

        <button className="create-post-btn">Create Post</button>

      </form>
    </div>
  )
}