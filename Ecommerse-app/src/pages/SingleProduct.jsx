import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SingleCard from '../components/card/SingleCard'

const SingleProduct = () => {
    let [num , setNum] = useState(0)

  //Use params
  const params = useParams()
  // const [data, setData] = useState(null)
  const [arr, setArr] = useState(null);
  

// UseEffect//
useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${params.id}`)
  .then((res) => {
    const products = res.data
    setArr(products)
  }
  ).catch((error)=>{
    console.log(error);
  })
  }, []);




  
  

  return (
   <div>
    <Navbar />
     <div style={{height:"80vh"}} className='flex justify-center align-align-items-center mt-12 '> 
      {arr ? 
       <SingleCard title={arr?.title} description={arr?.description} price={arr?.price}  image={arr?.image} key={arr?.id}  arr={arr} />

   : <h1>Loading....</h1>}
    </div>
   </div>
    
  )
}

export default SingleProduct