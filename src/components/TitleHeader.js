import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function TitleHeader() {
    const theme = useTheme();
    theme.typography.h2={
        fontSize:'4rem',
        [theme.breakpoints.down('md')]:{
          fontSize:'2.1rem',
        }
      };
    return (
        <>
        <div style={{textAlign:"center"}}>
            <Typography variant="h2" sx={{color:"white",m:3}}>Youtube2Mp3</Typography>
            <Typography variant="h6" sx={{color:"white",m:3}}>Find, watch and download YouTube videos</Typography>
        </div>
        </>
      );
}

export default TitleHeader;