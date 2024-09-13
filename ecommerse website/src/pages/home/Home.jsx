import { Typography,Box } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import MultiActionAreaCard from '../../Components/Card';


const Home = () => {
  // const [data , setData] = useState([]);
  const data = 
  [
     {
         "title" : "Face Wash",
         "body" : "hello world",
         "id":"1"
     },
     {
         "title" : "Shampoo",
         "body" : "hello world",
         "id":"2"
     },
     {
         "title" : "Soap",
         "body" : "hello world",
         "id":"3"
     },
     {
         "title" : "tomato",
         "body" : "hello world",
         "id":"4"
     }
 ]
 
 
 

  // useEffect(()=>{
  //  axios.get("https://jsonplaceholder.typicode.com/posts")
  //  .then(res=>{
  //     //  console.log(res.data)
  //      setData(res.data)
  //  }).catch(error =>{
  //       console.log(error)
  //  })
  // })
  return (
    <>
    <Typography className='mt-3 text-center' variant="h3" color="initial">POSTS!</Typography>
    <Box className='d-flex container justify-content-center flex-wrap gap-5 mt-5'>
        {data.length > 0 ? data.map((item)=>{
            return <MultiActionAreaCard key={item.id} title={item.title} body={item.body} id={item.id}/>
        }): <Typography variant='h5'>Loading...</Typography>}
    </Box>
</>
  )
}

export default Home