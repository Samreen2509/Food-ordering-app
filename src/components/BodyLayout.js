import Cards from "./Cards";
import restaurants from "../utils/mockData";
const BodyLayout = () => {
    return(
      <div className="body-container">
      <div className="search-btn"><input type="search"></input><button>Search</button></div>
      <div className="res-cointainer">
        {
          restaurants.map((restaurants)=>(
            <Cards  key={restaurants.info.id} resData={restaurants}/>
          ))
        }
        </div>
    </div>
    )
    };
export default BodyLayout;