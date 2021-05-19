# Amazon-series-app
```javascript
ReactDOM.render(<><h1 style={{textAlign:"center",backgroundColor:"white",marginBottom:"20px",padding:"34px",dislay:"block"}}>This is amazon original series</h1>
{data.map((val)=>
{ 
return (<App image={val.image}
  url={val.url}
></App>)})}
</>,
```
> App.jsx
 
        
```javascript
function App(props){
return(
    
<div className="card " style={card2} >
  <img className="card-img-top" src={props.image} style={{width:"287px",height:"280px"}}/>
  <div className="card-body">
    <h5 className="card-title">Movie description</h5>
    <p className="card-text">This is amazon prime free web series which you watch to click watch now.</p>
    <a href={props.url} className="btn btn-primary">watch now</a>
  </div>
  </div>
)}
export default App
```
[image](nitin.jpg)
