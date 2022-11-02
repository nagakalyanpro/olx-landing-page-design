import React, {useState} from 'react'
import { kids } from '../data'

const KidSection = () => {
    const [kidsWear, setKidsWear]= useState(kids)
  return (
    <div className='kid-section'>
       <div className="title-section">
       <div className="category">More on Kids</div>
        <div className="view-more">View more</div>
       </div>
<div className="map-section">
    {kidsWear?.map((item)=>{
        const {id, title, price, image, date, featured } = item;
        return(
            <div key={id}>
              <div className="map-subsection">
              <div className="top">
               <div className="feature">{featured}</div>
               <div className="sec-image"> <img src={image} alt="" /></div>
                <div className="fav"></div>
               </div>
               <div className="bottom">
                <div className="sec-price">
                    <h4>Rs. {price}</h4>
                </div>
                <div className="desc">
                    <p>{title}</p>
                </div>
                <div className="date">{date}</div>
               </div>
            </div>
              </div>
        )
    })}
</div>
    </div>
  )
}

export default KidSection