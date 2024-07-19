//this restaurant menu component will be reused, in this dynamic data will be reloaded
//this component only has one job just to display the data

import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import ResItemCategory from "./ResItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerCard />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCategory = categories.filter(
    (category) =>
      category.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="flex flex-col items-center mb-14">
      <div className="w-6/12 m-auto flex flex-col justify-center items-center p-4 shadow-md">
        <h3 className="font-bold">{name}</h3>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p className="font-semibold">
          {"Rating- "}
          {avgRating}
        </p>
      </div>
      <h3 className="font-bold my-2">Menu</h3>
      <div className="w-11/12"> 
        {/* whenever you're using a map alway use a key */}

        {/* Building Accordion feature */}
        <p>
          {itemCategory.map((category) => (
            <ResItemCategory key={category?.card?.card?.title} data={category?.card?.card} />
          ))}
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
