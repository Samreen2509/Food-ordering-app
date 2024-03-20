import { CDN_URL } from "../utils/contant";
const Cards = (props) => {
    const {resData}=props;
    const {cloudinaryImageId}=resData?.info;
   return(
    <div className="cards-container">
      <img className="card-img" alt="cardImg" src={CDN_URL+cloudinaryImageId} />
      <h3>{resData.info.name}</h3>
      <p>{resData.info.locality}</p>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating}</h4>
      
    </div>
   )
  };
export default Cards;