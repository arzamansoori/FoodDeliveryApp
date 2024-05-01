//this restaurant menu component will be reused, in this dynamic data will be reloaded
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_URL+resId);

    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

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
