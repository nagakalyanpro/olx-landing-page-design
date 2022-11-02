import React, {useState} from 'react'
import { fresh } from '../data'
const Fresh = () => {
    const [freshProducts, setFreshProducts] = useState(fresh)
  return (
    <div className='fresh-section'>
    <div className="title-section">
    <div className="category">Fresh recommendations</div>
     <div className="view-more"></div>
    </div>
<div className="map-section">
 {freshProducts?.map((item)=>{
     const {id, title, price, image, date,address, featured } = item;
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
             <div className="location">
             <div className="address">{address}</div>
             <div className="date">{date}</div>
             </div>
            </div>
         </div>
           </div>
     )
 })}
</div>
 </div>
  )
}

export default Fresh