import React from 'react'
import '../CSS_files/Brands.css'
import brand_logo from '../Images/brand-tag.jpeg'
const Brands = () => {
  return (
    <div className='brand'>
      <h1>rewards from brands you love.</h1>
      <img src={brand_logo} alt="" />
      </div>
  )
}

export default Brands