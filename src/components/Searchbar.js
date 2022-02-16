import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ListCard from './ListCard';
import { CircularProgress, List} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TitleHeader from './TitleHeader';



const handleSubmit = async (e,value,video)=>{
    e.preventDefault();
    const videosList = [];
    
    
    video(<CircularProgress sx={{display:"flex",margin:"auto"}}/>);
    if(value==="")
    {
        alert("Please enter a valid search query");
    }
    else{
        await fetch(`https://youtube-api-left4dev.herokuapp.com/api/search/?q=${value}`,{mode:'cors'})
        .then(res=>res.json())
        .then((data)=>{
            console.log(data.results);
            data.results.map((item)=>{
                if(item.video)
                {
                    videosList.push(<ListCard key={item.video.id} duration ={item.video.duration}title={item.video.title} thumbnail={item.video.thumbnail_src} views={item.video.views} videoId={item.video.id} link={item.video.url}/>);
                }
                
            });
            console.log(videosList);
            video(videosList);
        });

       
    }
}

export default function Searchbar() {
  const theme = useTheme();
    const [search, setSearch] = useState('');
    const [video,setVideo] = useState([]);
  return (
      <div style={{background:"url(https://ak.picdn.net/shutterstock/videos/11744756/thumb/3.jpg)"}}>
        <Box sx={{background:"rgba(0,0,0,0.5)",p:10,display:"flex",flexDirection:"column",alignContent:"center",flexWrap:"wrap"}}>
          <TitleHeader/>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "21rem",borderRadius:123,margin:"auto",marginBottom:"2rem"}}
      onSubmit={(e)=>handleSubmit(e,search,setVideo)}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search Youtube Videos..."
        inputProps={{ 'aria-label': 'search youtube videos' }}
        onChange={e=> setSearch(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon />
      </IconButton>
    </Paper>
    </Box>
    
    <List sx={{  width: '100%', bgcolor: 'background.paper'}}>
        {video}
    </List>
    
    </div>
    
  );
}
