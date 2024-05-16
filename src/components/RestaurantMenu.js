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
    <div>
      <h3>{name}</h3>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>{avgRating}</p>
      <h3>Menu</h3>
      <ul>
        {/* whenever you're using a map alway use a key */}
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
