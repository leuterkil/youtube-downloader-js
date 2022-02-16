import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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

function SingleVideo(props) {
    const theme = useTheme();
    const {videoId} = useParams();
    const [loading,setLoading] = useState(false);
    const [buttonLoading,setButtonLoading] = useState(false);
    const styles = (theme)=>({
        frame:{
            width:"49%",
            height:"50vh",
            mt:5,
            [theme.breakpoints.down('md')]:{
                width:"90%",
                height:"40vh"
            }

        },
        title:{
            [theme.breakpoints.down('md')]:{
                fontSize:"1.2rem"
            }
        }
    });
    return ( <div style={{display:"flex",justifyContent:"center"}}>
    <Box sx={styles(theme).frame}>
        
    <iframe
        title={'YouTube video'}
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=true`}
        frameBorder="0"
        autoPlay="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Box sx={{mt:3}}>
      <Typography variant="h4" sx={styles(theme).title}>{props.title}</Typography>
      <Typography variant="subtitle2">{props.views} - {props.date}</Typography>
      <Divider/>
      <Button variant="contained" disabled={buttonLoading} size="small" color="primary" sx={{mt:2}} onClick={(e)=>{downloadMp3(e,videoId,setButtonLoading)}}><Typography variant="button" sx={styles(theme).buttonText}> Download MP3</Typography></Button>
      </Box>
      </Box></div> );
}

export default SingleVideo;