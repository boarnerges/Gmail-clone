import { ArrowBack, CheckCircle, Delete, Email, Error, LabelImportant, MoreVert, MoveToInbox, WatchLater } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mail.css';

function Mail() {

  const navigator = useNavigate();

  return (
    <div className='mail'>
        <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton onClick={() => navigator('/')}>
            <ArrowBack/>
          </IconButton>

          <IconButton>
            <MoveToInbox/>
          </IconButton>

          <IconButton>
            <Error/>
          </IconButton>

          <IconButton>
            <Delete/>
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater/>
          </IconButton>

          <IconButton>
            <CheckCircle/>
          </IconButton>

          <IconButton>
            <LabelImportant/>
          </IconButton>

          <IconButton>
            <MoreVert/>
          </IconButton>

        </div>
        <div className='mail__toolsRight'>

        <IconButton>
            <MoreVert/>
          </IconButton>

          <IconButton>
            <MoreVert/>
          </IconButton>

          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        </div>
       <h1>What is going on Bro!!!</h1>
    </div>
  );
}

export default Mail