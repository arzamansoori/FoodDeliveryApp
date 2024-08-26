import RestroCard, { withPromotedLabel } from "./RestroCard";
import { useState, useEffect, useContext } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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

  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const [searchRestaurants, setsearchRestaurants] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestroCard);

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      //"https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("printing json", json);
    const allCards =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("allcards", allCards);

    const cardsWithRestaurants = allCards.filter(
      (card) =>
        card?.card?.gridElements?.infoWithStyle?.restaurants != undefined
    );

    let allRestaurants = [];

    console.log("Cards with restaurants", cardsWithRestaurants);

    for (let card of cardsWithRestaurants) {
      allRestaurants = allRestaurants.concat(
        card?.gridWidget?.gridElements?.infoWithStyle?.restaurants
      );
    }
    console.log("concat", allRestaurants);

    let uniqueRestaurants = [];
    let resIdArr = [];

    //removing duplicate key
    for (let res of allRestaurants) {
      let resId = res?.info?.id;

      if (!resIdArr.includes(resId)) {
        //add restaurant and res id
        resIdArr.push(resId);
        uniqueRestaurants.push(res);
      }
    }
    console.log("unique Res", uniqueRestaurants);
    console.log("resIdArr", resIdArr);

    //this is not a recommended way
    //stateListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    //setListOfRestaurants(uniqueRestaurants);
    setListOfRestaurants(allCards);

    setFilterRestaurants(allCards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h3>Oops! Looks like you're offline.</h3>;
  }

  if (listOfRestaurants.length === 0) {
    return <ShimmerCard />;
  }

  console.log("List of restaurants", listOfRestaurants);
  //Conditional rendering
  // listOfRestaurants.length === 0 ? (
  //   <ShimmerCard />
  // ) :

  const {loggedInUser, setUserName} = useContext(UserContext);

  return (
    <div className="body">
      <div className="flex items-center justify-start flex-wrap">
        <div className="m-4 p-2">
          {/* input and search button */}
          <input
            type="text"
            className="border border-solid border-black"
            data-testid= "searchInput"
            value={searchRestaurants}
            onChange={(e) => {
              if (e.target.value) {
                setsearchRestaurants(e.target.value);
              } else {
                setsearchRestaurants((e.target.value = ""));
                setFilterRestaurants(listOfRestaurants);
              }
            }}
          ></input>
          <button
            className="rounded-md border-2 border-pink-200 hover:border-b-4 px-5 py-0.5 bg-green-100 m-4"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchRestaurants.toLowerCase());
              });
              setFilterRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="h-8 rounded-md border-2 border-pink-200 hover:border-b-4 px-5 py-0.5 bg-green-100 m-4"
          onClick={() => {
            //filter logic
            //using useState
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            //setListOfRestaurants(filteredList);
            setFilterRestaurants(filteredList)
          }}
        >
          Top Rated Restaurants{" "}
        </button>
        <div>
          <label>Username :</label>
          <input className="rounded-md border-2 border-pink-200 hover:border-b-4 px-3 py-0.5 bg-green-100 m-2"
          value = {loggedInUser}
          onChange={(e)=>setUserName(e.target.value)}>
               
          </input>
        </div>
      </div>
      <div className="flex justify-around flex-wrap">
        {filterRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
