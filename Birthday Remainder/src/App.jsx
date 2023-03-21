import { useState } from "react";
import data from "./data"
import List from "./List";
const App = () => {
  const [datas, setData] = useState(data)
  
  return (
    <main>
      <section className="container">
      <h2>Birthday Reminder</h2>
      <h2 style={{margin: "3rem 0 3rem"}}>{datas.length} Birthdays Today</h2>
      <List person={datas}/>
      <button type="button" className="btn btn-block" onClick={()=>setData([])}>
        Clear All 
      </button>
      </section>
    </main>
    
    );
};

export default App;
