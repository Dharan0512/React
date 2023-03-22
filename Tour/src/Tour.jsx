import React, { useState } from 'react'

const Tour = ({id, image, name, info, price, removeTour}) => {
  const [readInfo, setReadInfo] = useState(false)

  return (
    <section className="single-tour" key={id}>
        <img src={image} alt={name} className="img"/>
        <span className="tour-price">${price}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            {/* NOTE: */}
            <p>{readInfo ? info : `${info.substring(0,200)}...`}
              <button className='info-btn' onClick={()=>{setReadInfo(!readInfo)}}>
                {readInfo ? 'show less' : 'read More'}
              </button>
            </p>
            {/* NOTE: */}
        </div>
        <button className='btn btn-block delete-btn' onClick={()=>removeTour(id)}>not Interested</button>
    </section>
  )
}

export default Tour