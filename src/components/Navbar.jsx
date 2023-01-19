import { AppBar, Typography } from '@mui/material'
import React from 'react';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from '../Ui/Navbar';

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      className={classes.app_bar}
    >
      <div style={{
        display: 'flex ', flexDirection: 'row', alignItems: 'center', gap: '5px',
      }}
      >
        <CoronavirusIcon />
        <Typography variant="h6" color="inherit" component="div">
          Covid-Dashboard
        </Typography>
      </div>
      <div style={{
        display: 'flex ',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 0 0 1em',
        backgroundColor: '#1976d2',
        height: '90%',
        width: '40%',
        border: '1.5px solid #05417e',
        borderRadius: '5px',
      }}
      >
        <SearchIcon />
        <input
          style={{
            color: 'white',
            padding: '5px',
            background: 'none',
            border: 0,
            height: '90%',
            width: '90%',
          }}
          placeholder="Search By Country..."
        />
      </div>

    </AppBar>
  )
}

export default Navbar
