import {useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading"

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tour, setTour] = useState([])

  const removeTour = (id)=>{
    console.log(id)
    const newTour = tour.filter((tour)=>
        tour.id !== id
    )
    console.log(tour.id)
       setTour(newTour);
    console.log(newTour)
  }
  const fetchTour = async ()=>{
    setIsLoading(true)
    try {
     const response = await fetch(url);
     const tours = await response.json() 
     console.log(tours)
     setTour(tours)
    } catch (error) {
      console.log(error) 
    }
    setIsLoading(false)
  }

  const refreshButton = ()=>{
    setTour([])
    fetchTour()
  }
  useEffect(()=>{
    fetchTour()
  },[])
  
  if(isLoading){
   return (
     <main>
       <Loading/>
     </main>
   )
  }
  return (
    <main>
      <Tours tours={tour} removeTour={removeTour}/>
      <button className="btn" onClick={()=>refreshButton()}>Refresh</button>
    </main>
    );
};
export default App;
