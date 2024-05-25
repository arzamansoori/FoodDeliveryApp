//this restaurant menu component will be reused, in this dynamic data will be reloaded
//this component only has one job just to display the data

import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";

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
  console.log(itemCards);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-start m-4 p-4 w-[400px] shadow-lg">
      <h3 className="font-bold">{name}</h3>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p className="font-semibold">{"Rating- "}{avgRating}</p>
      </div>
      <h3 className="font-bold mb-2">Menu</h3>
      <div className="mb-4 pb-4 shadow-xl flex flex-col">
      <ul>
        {/* whenever you're using a map alway use a key */}
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
