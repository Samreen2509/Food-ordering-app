import Cards from "./Cards";
import { useState,useEffect } from "react";
const BodyLayout = () => {
  const [restaurants,setrestaurant]=useState([
    {
      "info": {
        "id": "24186",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "kftubynyhvafdpsj6jue",
        "locality": "Living Style Mall",
        "areaName": "Jasola",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.2,
      }
    },
  
    
      {
        "info": {
        "id": "223411",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Sanctuary Metro",
        "areaName": "Golf Course",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
          "avgRatingString": "4.3",
      } 
    },
  
    {
      "info": {
        "id": "253716",
        "name": "McDonald's",
        "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
        "locality": "M M Ali Jauhar Marg",
        "areaName": "New Friends Colony",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 3.4,
        "parentId": "630",
        "avgRatingString": "4.4",
      } 
    },
  
    {
      "info": {
        "id": "17518",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Kalkaji",
        "areaName": "Kalkaji",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.3,
        
    
  }
},
 {   
      "info": {
        "id": "156105",
        "name": "The Good Bowl",
        "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "locality": "LSC DDA",
        "areaName": "Sarita Vihar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        
    
  }
},
    {
      "info": {
        "id": "69459",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
        "locality": "Gardens Galleria Mall",
        "areaName": "Sector 38",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "avgRating": 4.3,
       
    
  }
},
    {
      "info": {
        "id": "19081",
        "name": "Subway",
        "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
        "locality": "Splendor Forum Mall",
        "areaName": "Jasola",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "2",
        "avgRatingString": "4.0",
        
    }
  },
    {
      "info": {
        "id": "63002",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "v2z4zcon24k4lvffzdjz",
        "locality": "Pocket D & E Sarita Vihar",
        "areaName": "Sarita Vihar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "4925",
        "avgRatingString": "4.3",
        
      }
    },
  ]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData= async () => {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5482745&lng=77.301932&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
     setrestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    console.log(json); 
  };
    return(
      <div className="body-container">
      <div className="filter"><button onClick={()=>{
        const filterList=restaurants.filter(
          (res) =>res.info.avgRating>4
        );
        setrestaurant((filterList));
      }}>Top rated Restaurant</button></div>
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