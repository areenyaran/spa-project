//import 
import './CardOffer.css'
//function 
const CardOffer = (props) => { // props For Dynimc Data 
return (
<div className="card cardoffer" >
  <div className="card-body"  >
    <img src= {props.image} className ="img-fluid" alt={props.offers}/> 
  </div>
</div>
)
}
//Export
export default CardOffer