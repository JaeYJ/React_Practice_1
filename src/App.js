/* eslint-disable */
// removing warning

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [post, setPost] = useState(['Jan', "Feb", "Mar"]);

  let [Like, setLike] = useState(Array(post.length).fill(0)); 

  // let [post, setPost] = useState('Post Nmae') // If we don't change the variable, don't use State

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:'red', fontSize: '50px'} }>Blog</h4>
      </div>


      {/* 
      <button onClick={() => {
          let sortedPost = [...post].sort(); 
          setPost(sortedPost);
        }}>
          Alphabetical Sort
      </button>
      */}

      <div className="list">
        <h4>{post[0]} <span onClick={() => { 
          setLike(prevLike => {
            const newLike = [...prevLike];
            newLike[0]++;
            return newLike;
          }) }}>Like</span> {Like[0]}</h4> 

        {/*
        <button onClick={() =>  {
          setPost(prevPost => {
            const newPost = [...prevPost];
            newPost[0] = "Apr";
            return newPost;
          });
          }}>change post name
        </button>   
        */}     
        <p>
          Date 1
        </p>
      </div>

      <div className="list">
        <h4>{post[1]} <span onClick={() => { 
          setLike(prevLike => {
            const newLike = [...prevLike];
            newLike[1]++;
            return newLike;
          }) }}>Like</span> {Like[1]}</h4> 

        {/*
        <button onClick={() =>  {
          setPost(prevPost => {
            const newPost = [...prevPost];
            newPost[1] = "May";
            return newPost;
          });
          }}>change post name
        </button>  
        */}
        <p>
          Date 2
        </p>
      </div>

      <div className="list">
        <h4>{post[2]} <span onClick={() => { 
          setLike(prevLike => {
            const newLike = [...prevLike];
            newLike[2]++;
            return newLike;
          }) }}>Like</span> {Like[2]}</h4> 

        {/*
        <button onClick={() =>  {
          setPost(prevPost => {
            const newPost = [...prevPost];
            newPost[2] = "Jun";
            return newPost;
          });
          }}>change post name
        </button>  
        */}
        <p>
          Date 3
        </p>
      </div>

      <Modal/>

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h4>Title</h4>
      <p>Date</p>
      <p>Contents</p>
    </div>
  )        
}

export default App;
