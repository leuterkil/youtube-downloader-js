import React from 'react';
import { Box,AppBar,Toolbar,Typography } from '@mui/material';

function Navigation() {
    return (         
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{background:"#aaaaff"}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Youtube Downloader
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>);
}

export default Navigation;