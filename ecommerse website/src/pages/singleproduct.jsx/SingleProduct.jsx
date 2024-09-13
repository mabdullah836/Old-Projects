import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MultiActionAreaCard from '../../Components/Card';

const SingleProduct = () => {
    const params = useParams()
    const [data , setData] = useState(null);
    useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
     .then(res=>{
         console.log(res.data)
         setData(res.data)
     }).catch(error =>{
          console.log(error)
     })
    })
  return (
       <div className='d-flex justify-content-center mt-5 w-64'>
         {data ? <h1>{data.title.toUpperCase()}</h1>    : <h1 >Loading....</h1>}
       </div>
  )
}

export default SingleProduct