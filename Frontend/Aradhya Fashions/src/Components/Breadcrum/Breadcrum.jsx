import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const {product}=props;
  return (
    <div>
      HOME <img src={arrow_icon} 
      alt="arrow" className='breadcrum-arrow'/> 
      {product.category.toUpperCase()} 
      <img src={arrow_icon} alt="arrow" className='breadcrum-arrow'/> 
      {product.name.toUpperCase()}
    </div>
  )
}

export default Breadcrum
