import { useState } from "react";
import people from "./data"
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text, id} = people[index];

  const nextPerson = ()=>{
    setIndex((currentState)=>{
      const newIndex = currentState + 1
      if(newIndex > people.length -1){
        return 0;
      }
      return newIndex
    })
  }

  const previousPerson = ()=>{
    setIndex((currentState)=>{
      const newIndex = currentState - 1
      if(newIndex < 0){
        return people.length-1;
      }
      return newIndex
    })
  }

  const random = ()=>{
    const randomNumber = Math.floor(Math.random() * people.length)
    console.log(randomNumber)
    setIndex(()=>{return randomNumber})
  }

  return (
    <main>
      <h1>Reviews Starter</h1>
      <article className="review">
        <div className="img-container">
          <img src={image} alt="" className="person-img"/>
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      <button onClick={()=>previousPerson(id)} className="btn"><FaChevronLeft/></button>

      <button className="btn btn-hipster" onClick={()=>{random()}}>Surprise me</button>
      <button onClick={()=>nextPerson(id)} className="btn"><FaChevronRight/></button>
      </article>
    {/*
    <div className="review">
       {name}
    </div> */}
  </main>
  );
};
export default App;