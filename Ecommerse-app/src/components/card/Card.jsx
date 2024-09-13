import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({title, description,image,id}) => {
    
   const navigate = useNavigate()

  function goToSingleProduct(){
    navigate(`/singleProduct/${id}`)
  }



  return (
    <div onClick={goToSingleProduct} className="card w-72 bg-white-100 shadow-xl"  >
  <figure><img className='w-44' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description.slice(0,70)+'...'}</p>
  </div>
</div>
  )
}

export default Card