import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState();

  useEffect(()=>{
    const getComment = async () => {
      try{
        const response = await axios.get('http://127.0.0.1/api/comments');
        const {data} = response;
        setComments(data);
      }
      catch (err) {
        const response = err.response;
      }
    }
    getComment();
  },[])

  return (
    <>
      { comments && comments.data.map((comment) => (
          <div key={comment.id}>
            <div>{comment?.id}</div>
            <div>{comment?.user_name}</div>
          </div>
        )) 
      }
    </>
  )
}

export default App
