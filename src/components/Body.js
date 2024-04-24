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

  const [searchRestaurants, setsearchRestaurants] = useState("");

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    //this is not a recommended way
    //stateListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    //recommended way
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional rendering

  return listOfRestaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="filter-btns">
        <div className="search-btns">
          {/* input and search button */}
          <input
            type="text"
            className="search-box"
            value={searchRestaurants}
            onChange={(e) => {
              setsearchRestaurants(e.target.value);
            }}
          ></input>
          <button className="filter-search" onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) => {
              res.info.name.toLowerCase().includes(searchRestaurants.toLowerCase())
            })
            setsearchRestaurants(filteredRestaurants)
          }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            //using useState
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );

            setListOfRestaurants(filteredList);

            //USING NORMAL JAVASCRIPT
            // listOfRestaurants = listOfRestaurants.filter((res) =>
            //   res.info.avgRating > 4
            // );
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
