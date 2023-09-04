import React from 'react'
import '../Styles/Section4.css'
import rating from '../images/yellow star.jfif'


const Watches = ({img,name,price,normalPrice,sale  }) => {
  return (
<div >
          

<div className="watchSub" >
                <div className="watchCarrier">
                  <img src={img} alt={name} />
                </div>
                <div>
                  <p className="name">{name}</p>

                  <div className="ratingWrap">
                  <img src={rating} alt="" />
                  <img src={rating} alt="" />
    <img src={rating} alt="" />
    <img src={rating} alt="" />
    <img src={rating} alt="" />

                  </div>

                  <p>
                    {" "}
                    <del>{normalPrice}</del>
                    <strong className="price">${price}</strong>
                  </p>

                  <button>Add to cart </button>
                  {sale ? <b className="sale">Sale</b> : ""}
                </div>
              </div>
            
    
        </div>
  )
}

export default Watches