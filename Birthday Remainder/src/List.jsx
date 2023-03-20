import React from 'react'
import Person from './Person'
const List = ({person}) => {
  return (
    <section className='main'>
      {
        person.map((persons)=>{
         return <Person key={persons.id} {...persons}/>
        })
      }
    </section>
  )
}

export default List
