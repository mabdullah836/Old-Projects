import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function MultiActionAreaCard({title , body,id}) {
  const navigate = useNavigate()
  const [data , setData] = React.useState([])
  function nextPost(){
    navigate(`singleproduct/${id}`)
  }
  // console.log(id);
  function savePost(e){
  //  e.stopPropagtion()
   data.push({title,body,id})
   setData([...data])
   console.log(data);
  }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1705971842970-44f377f1c1cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button onClick={()=>console("hhhh")} size="small" color="primary">
          Savepost
        </Button> */}
        <button onClick={()=>savePost()}>SavePost</button>
      </CardActions>
    </Card>
  );
}