import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BasicModal from './Modal'; 


export default function CommentCard({ getComment, commentId, userName, commentBody, userEmail, homePage, createdAt, children }) {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    const renderNestedComments = (nestedComments) => {
        if (!nestedComments || nestedComments.length === 0) {
            return null;
        }
        
        return (
            <Box sx={{ marginLeft: '25px', marginTop: '10px' }}>
                {nestedComments.map((nestedComment) => (
                    <CommentCard
                        key={nestedComment.id}
                        commentId={nestedComment.id}
                        userName={nestedComment.user_name}
                        commentBody={nestedComment.body}
                        userEmail={nestedComment.email}
                        homePage={nestedComment.homePage}
                        createdAt={nestedComment.created_at}
                        children={nestedComment.children}
                        getComment={getComment}
                    />
                ))}
            </Box>
        );
    };

    return (
        <Box sx={{ minWidth: '300px', marginBottom:'1ch'}}>
            <Paper>
                <Box sx={{display: 'flex', p: '2px', m: 1}}>
                    <AccountBoxIcon color="primary"/>
                    <Box component='span' sx={{m:0}}>   
                        <Typography component='span' color="primary">{userName}</Typography>
                    </Box>
                    <Box component='span' sx={{ m:0, flexGrow: 1, textAlign: 'end' }}>   
                        <Typography component='span' color="gray">{createdAt}</Typography>
                    </Box>
                </Box>
            </Paper>
            <Box padding="5px" paddingLeft="25px">
                <Typography textAlign="left">{commentBody} <Button onClick={handleOpenModal} size='small' variant='outlined'>Reply</Button></Typography>
            </Box>
            <Box paddingLeft="25px" sx={{ display: 'flex' }}>   
                <Typography sx={{ fontSize: '10px' }} color="gray">{userEmail} | {homePage ? homePage : 'No home page'}</Typography>
            </Box>
            {renderNestedComments(children)}
            
            {showModal && (
        <BasicModal open={showModal} parent_id={commentId} handleClose={handleCloseModal} getComment={getComment}/>
      )}

        </Box>
    );
}
