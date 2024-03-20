const Cards = (props) => {
    const {resData}=props;
    const {cloudinaryImageId}=resData?.info;
   return(
    <div className="cards-container">
      <img className="logo" alt="logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h3>{resData.info.name}</h3>
      <p>{resData.info.locality}</p>
      <h4>{resData.info.costForTwo}</h4>
      <p>{resData.info.cuisines.join(",")}</p>
      <h4>{resData.info.avgRating}</h4>
      
    </div>
   )
  };
export default Cards;