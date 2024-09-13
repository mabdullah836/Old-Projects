import React from 'react'
import { useDispatch } from 'react-redux';
import {addToCart} from "../../config/redux/reducers/CartItemslice"

const SingleCard = ({title,description,image,addingItems,arr}) => {

    const dispatch = useDispatch();


function addingItems(){
    dispatch(addToCart({
        item: arr,
    }));
}

  return (
    <div className="card w-96 bg-white shadow-xl">
  <figure><img src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button onClick={addingItems} className="btn btn-primary" >Add Item</button>
    </div>
  </div>
</div>
  )
}

export default SingleCard