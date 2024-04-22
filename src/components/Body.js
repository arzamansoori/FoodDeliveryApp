import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
//import { resList } from "../utils/mockData";

//USING NORMAL JAVASCRIPT
// let listOfRestaurants = [
//   {
//     "info": {
//       "id": "86274",
//       "name": "Varalakshmi Tiffins",
//       "cloudinaryImageId": "3632e911860bd3a90f9558fc81372b73",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "South Indian"
//       ],
//       "avgRating": 4.5,
//       "parentId": "6482",
//       "avgRatingString": "4.5",
//   }
// },
// {
//   "info": {
//     "id": "86275",
//     "name": "Dominos",
//     "cloudinaryImageId": "3632e911860bd3a90f9558fc81372b73",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//       "South Indian"
//     ],
//     "avgRating": 3.5,
//     "parentId": "6482",
//     "avgRatingString": "3.5",
// }
// },
// {
//   "info": {
//     "id": "86276",
//     "name": "MCD",
//     "cloudinaryImageId": "3632e911860bd3a90f9558fc81372b73",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//       "South Indian"
//     ],
//     "avgRating": 4.1,
//     "parentId": "6482",
//     "avgRatingString": "3.5",
// }
// }
// ];


const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    //this is not a recommended way
    //stateListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    
    //recommended way
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(listOfRestaurants.length === 0){
    return <ShimmerCard />
  }
  


  return (
    <div className="body">
      <button className="filter-btn" 
      onClick={() => {
        //filter logic
        //using useState
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);

        setListOfRestaurants(filteredList);

        //USING NORMAL JAVASCRIPT
        // listOfRestaurants = listOfRestaurants.filter((res) => 
        //   res.info.avgRating > 4
        // );
        // console.log(listOfRestaurants);
      }}
      > 
      Top Rated Restaurants </button>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
