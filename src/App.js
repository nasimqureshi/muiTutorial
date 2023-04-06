import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

function App() {
  return (
    <div>Hello
    <Button color='inherit' variant='contained' size='large' startIcon={<SendIcon />}>Click Me</Button>
    <Button color='inherit' variant='contained' size='large' endIcon={<DeleteIcon />}>Click Me</Button>
      </div>

   
  );
}

export default App;
