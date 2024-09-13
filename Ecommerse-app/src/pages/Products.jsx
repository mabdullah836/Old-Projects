import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/card/Card'
import Navbar from '../components/navbar/Navbar'
const Products = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            }).catch((error) => {
                console.log(error);
            }, [])
    })

    //  console.log(products);

    return (
        <div>
            <Navbar />

            <div className='flex gap-8  mt-5 flex-wrap justify-center'>

                {data.length > 0 ? data.map((item) => {
                    return <Card title={item.title} description={item.description} price={item.price}  image={item.image} key={item.id} id={item.id} />

                }) : <h1>Loading....</h1>}


            </div>

        </div>

    )
}

export default Products