import React from 'react'
import '../CSS_files/MobileView.css'
import mobile1 from '../Images/mobile1.jpeg'
import mobile2 from '../Images/mobile2.jpeg'
import mobile3 from '../Images/mobile3.jpeg'
const MobileView = () => {
  return (
    <div className='mobileview flex'>
      <div className="left-img1">
        <img src={mobile1} alt="" />
      </div>
      <div className="left-img2">
        <img src={mobile3} alt="" />
      </div>
      <div className="center-img">
        <img src={mobile2} alt="" />
      </div>
      <div className="right-img2">
        <img src={mobile1} alt="" />
      </div>
      <div className="right-img3">
        <img src={mobile3} alt="" />
      </div>

    </div>
  )
}

export default MobileView;