import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, List,ListItem } from '@mui/material';

export default function ListCard(props) {
  const theme = useTheme();

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
          <Typography component="div" variant="h5" sx={{width:"20rem"}}>
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
          <Button size="small" color="primary">
            Download Mp3
          </Button>
        </Box>
      </Box>

    </Card>
    </ListItem>
  );
}
