import RestroCard from "./RestroCard";
import { useState } from "react";
import { resList } from "../utils/mockData";

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

  const [listOfRestaurants, stateListOfRestaurants] = useState(resList);



  return (
    <div className="body">
      <button className="filter-btn" 
      onClick={() => {
        //filter logic
        //using useState
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);

        stateListOfRestaurants(filteredList);

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
