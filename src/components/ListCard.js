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
import { ArrowDownwardRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
  const styles = (theme)=>({
    root:{
      display: 'flex',
      paddingInline:"2rem",
      paddingTop:"1rem",
      [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        alignItems:'center',
      }
    },
    buttonText:{
      fontSize:'0.875rem',
      [theme.breakpoints.down('md')]:{
        fontSize:'10px'
      }
    },
    title:{
      [theme.breakpoints.down('md')]:{
        margin:'auto',
        textAlign:'center'
      }
    },
    views:{
      [theme.breakpoints.down('md')]:{
        textAlign:'center'
      }
    }
  });
  theme.typography.h5={
    width:'20rem',
    fontSize:'1.5rem',
    [theme.breakpoints.down('md')]:{
      width:"14rem",
      fontSize:'1.1rem',
    }
  };
  const [loading,setLoading]=useState(false);

  return (

    
      <ListItem sx={{justifyContent:'center'}} >
    <Card sx={ styles(theme).root}>
    <Link style={{textDecoration:"none"}} to={`/video/${props.videoId}`}>
            <CardMedia
        component="img"
        sx={{ width: 151,height:101 }}
        image={props.thumbnail}
        alt={props.title}
      />
      </Link>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Link style={{textDecoration:"none"}} to={`/video/${props.videoId}`}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={styles(theme).title}>
            {props.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={styles(theme).views}
          >
            {props.views}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            sx={styles(theme).views}
          >
            {props.duration}
          </Typography>
        </CardContent>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant="contained" disabled={loading} size="small" color="primary" sx={{ml:2}} onClick={(e)=>{downloadMp3(e,props.videoId,setLoading)}}>
          <ArrowDownwardRounded sx={{mr:1}}/> <Typography variant="button" sx={styles(theme).buttonText}> Download MP3</Typography>   {loading && (
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
          </Button>
          <Button variant="contained" size="small" color="primary" sx={{ml:2}} href={props.link}>
           <Typography variant="button" sx={styles(theme).buttonText}> Youtube Link</Typography>
          </Button>

        </Box>
      </Box>

    </Card>
    </ListItem>
    
  );
}
