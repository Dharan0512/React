import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
  return (
   <section>
    <div className="title">
         <h2>{tours.length == 0 ? `${tours.length} tour left` : "Our tours"}</h2>
        <div className={tours.length == 0 ? "title-redline" :"title-underline"}></div>
    </div>
    <div className="tours">
        {tours.map((tour)=>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })}
    </div>
   </section>
  )
}

export default Tours