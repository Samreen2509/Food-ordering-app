import Cards from "./Cards";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyLayout = () => {
  const [restaurants,setrestaurant]=useState([]);  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData= async () => {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5482745&lng=77.301932&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    // Optional chaining
     setrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //Shimmer loader
    return restaurants.length === 0 ? (<Shimmer/>) : (
      <div className="body-container">
      <div className="filter"><button onClick={()=>{
        const filterList=restaurants.filter(
          (res) => res.info.avgRating>=4
        );
        setrestaurant((filterList));
      }}>Ratings 4.0+</button></div>

      
     
      
      <div className="res-cointainer">
        {
          restaurants.map((restaurant)=>(
            <Cards  key={restaurant.info.id} resData={restaurant}/>
          ))
        }
        </div>
    </div>
    )
    };
export default BodyLayout;