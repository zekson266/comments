import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ getComment, open, handleClose, parent_id }) {

    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const homepageRef = React.useRef();
    const bodyRef = React.useRef();

    const handleAddComment = (ev) => {
        ev.preventDefault();
        const payLoad = {
            user_name: nameRef.current.value,
            body: bodyRef.current.value,
            email: emailRef.current.value,
            parent_id: parent_id,
            home_page: homepageRef.current.value
        };

        const AddComment = async () => {
            try{
              const response = await axios.post(`http://127.0.0.1/api/add`,payLoad);
              const {data} = response;
              getComment();  
            }
            catch (err) {
              const response = err.response;
            }
          }
          AddComment();
          
        console.log(payLoad);

        handleClose();
    }


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form action='' onSubmit={(ev)=>handleAddComment(ev)}>
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: '2ch' }}>
                Adding comment
            </Typography>
            <TextField
                fullWidth
                variant="outlined"
                sx={{ marginBottom: '2ch' }}
                type="text"
                required
                inputProps={{ minLength: 5 , maxLength: 55 }}
                name="nameRef"
                label="Name"
                inputRef={nameRef}
            />
            <TextField
                fullWidth
                variant="outlined"
                sx={{ marginBottom: '2ch' }}
                type="email"
                required
                inputProps={{ minLength: 5 , maxLength: 55 }}
                name="emailRef"
                label="Email"
                inputRef={emailRef}
            />
            <TextField
                fullWidth
                variant="outlined"
                sx={{ marginBottom: '2ch' }}
                type="text"

                inputProps={{ minLength: 5 , maxLength: 55 }}
                name="homepageRef"
                label="Home page"
                inputRef={homepageRef}
            />
            <TextField
                fullWidth
                variant="outlined"
                sx={{ marginBottom: '2ch' }}
                type="text"
                required
                inputProps={{ minLength: 5 , maxLength: 55 }}
                name="bodyRef"
                label="Comment text"
                inputRef={bodyRef}
            />
                <Box sx={{display: 'flex', justifyContent: 'end'}}>
                    <Button onClick={handleClose}>Cancel</Button><Button variant="contained" type="submit" >Add comment</Button>
                </Box>
            </Box>
            </form>
        </Modal>
    );
}