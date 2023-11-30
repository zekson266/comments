import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import viteLogo from '/vite.svg'
import axios from "axios";
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './App.css';
import CommentCard from './Card';

function App() {

  const [comments, setComments] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 25;
  const [column, setColumn] = useState('user_name'); 
  const [order, setOrder] = useState('asc');

  const toggleOrder = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc');
  }

  const getComment = async (column = 'user_name', order='asc') => {
    try{
      const response = await axios.get(`http://127.0.0.1/api/comments?page=${page}&itemsPerPage=${itemsPerPage}&column=${column}&order=${order}`);
      const {data} = response;
      setComments(data);
      console.log(data);
      setTotalPages(data.meta.last_page);
      setLoading(false);  
    }
    catch (err) {
      const response = err.response;
    }
  }
  useEffect(()=>{
    setLoading(true);

    
    getComment(column,order);
  },[page,column,order])

  return (

    <Container
      maxWidth="sm"
      sx={{ marginBottom: '3ch' }}
    >

      { loading && 
        <Box sx={{ width: '300px' }}>
          <h3>Loading...</h3>
          <LinearProgress />
        </Box>
      }

      { !loading && 
        <>
        <Button variant={column==='user_name' ? "contained" : "text"} onClick={() => {setColumn('user_name'); toggleOrder();}}>
          Name {column==='user_name' ? `(${order})` : ""}
        </Button>

        <Button variant={column==='email' ? "contained" : "text"} onClick={() => {setColumn('email'); toggleOrder();}}>
          By Email {column==='email' ? `(${order})` : ""}
        </Button>

        <Button variant={column==='created_at' ? "contained" : "text"} onClick={() => {setColumn('created_at'); toggleOrder();}}>
          By Date {column==='created_at' ? `(${order})` : ""}
        </Button>

          {comments?.data.map((comment) => (
            <CommentCard key={comment.id}
              commentId={comment.id}
              userName={comment.user_name}
              userEmail={comment.email}
              commentBody={comment.body}
              children={comment.children}
              createdAt={comment.created_at}
              getComment={getComment}
            />
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Pagination page={page} count={ totalPages } onChange={(ev, page) => setPage(page)} />
          </Box>
        </>
      }

    </Container>

  );
}

export default App
