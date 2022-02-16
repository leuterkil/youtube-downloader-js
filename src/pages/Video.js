import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleVideo from '../components/SingleVideo';


function Video() {
   
    
    const {videoId} = useParams();
    const [loading,setLoading] = useState(true);
    const[got,setGot] = useState(false);
    const [details,setDetails] = useState({});
    useEffect(()=>{
        setLoading(false);
        let dat={};
        if(!got){
            fetch(`https://youtube-api-left4dev.herokuapp.com/api/search/?q=${videoId}`,{mode:'cors'})
            .then(res=>res.json())
            .then((data)=>{
                setDetails(data.results[0].video);
                setGot(true);
                console.log(details);
            });
        }
        else{
            setLoading(true)
        }
        
    });
    return ( loading ? <SingleVideo title={details.title} views={details.views} date={details.upload_date}/> : <CircularProgress/>);
}

export default Video;