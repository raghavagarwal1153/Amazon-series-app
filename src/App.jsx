const card2={
    width:"18em",float:"left",margin:"40px"
    
        
}
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