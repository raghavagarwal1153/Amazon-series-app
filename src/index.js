import React from 'react';
import ReactDOM from 'react-dom';
import data from './data'
import App from "./App"
const h1={textAlign:"center",backgroundColor:"white",marginBottom:"20px",padding:"34px",dislay:"block"}

ReactDOM.render(<><h1 style={{textAlign:"center",backgroundColor:"white",marginBottom:"20px",padding:"34px",dislay:"block"}}>This is amazon original series</h1>
{data.map((val)=>
{ 
return (<App image={val.image}
  url={val.url}
></App>)})}
</>,
  document.getElementById("root")
  )
