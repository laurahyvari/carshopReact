import React from 'react';
import Carlist from './components/Carlist.js';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
function App() {
  return (
    <div className='App'>
      <AppBar position="static">
<Toolbar>
    <Typography variant="h6">
    CarShop 

    </Typography>


</Toolbar>
</AppBar>


      <Carlist />
    </div>
  );
}

export default App;
