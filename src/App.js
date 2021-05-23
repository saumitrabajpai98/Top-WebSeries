import React from "react";
//import ReactDOM from 'react-dom';
import Card from "./Card";
import './App.css';
import sdata from'./Sdata'

function App(){
return(
  <>
    <h1 className="heading_style">List of top 5 Web Series</h1>
    {sdata.map((cval)=>{
      return (
              <Card
              key={cval.id}              
              imgsrc={cval.imgsrc} 
              title={cval.title} 
              sname={cval.sname} 
              slink={cval.slink}
              />);
              }
            )
    }
  </>
);
}
export default App;