import { useState } from "react";
import data from "./data"
import List from "./List";
const App = () => {
  const [datas, setData] = useState(data)
  
  return (
    <div>
      <h2>Birthday Reminder</h2>
      <h2 style={{margin: "3rem 0 3rem"}}>{datas.length} Birthdays Today</h2>
      <List person={datas}/>
      <button onClick={()=>setData([])} className="btn">
        All clear
      </button>
    </div>
    
    );
};

export default App;
