import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, List,ListItem } from '@mui/material';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { saveAs } from 'file-saver';

const downloadMp3 = async (e,id,loading)=>{

  e.preventDefault();
  loading(true);
  const {data,headers} = await axios.get(`https://youtube-mp3-left4dev-back.herokuapp.com/download/${id}`,{
    responseType: 'blob',
    timeout: 120000,
  });
  const filename = headers['content-disposition'].split('=')[1].replace(/"/gi, '').trim();
  saveAs(data, filename);
    loading(false);

}



export default function ListCard(props) {
  const theme = useTheme();
  
  theme.typography.h5={
    width:'20rem',
    fontSize:'1.5rem',
    [theme.breakpoints.down('md')]:{
      width:"8rem",
      fontSize:'1.1rem',
    }
  };
  const [loading,setLoading]=useState(false);

  return (

      <ListItem sx={{justifyContent:'center'}} >
    <Card sx={{ display: 'flex',paddingInline:"2rem",paddingTop:"1rem"}}>
            <CardMedia
        component="img"
        sx={{ width: 151,height:101 }}
        image={props.thumbnail}
        alt={props.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" >
            {props.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.views}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button size="small" color="primary" onClick={(e)=>{downloadMp3(e,props.videoId,setLoading)}}>
            Download Mp3
          </Button>
          {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: "green",
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
        </Box>
      </Box>

    </Card>
    </ListItem>
  );
}
