import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
    let cuisines2 = cuisines.slice(0, 2);
    let displayName = name.length >20 ? name.slice(0,20).concat("...") : name;
  return (
    <div className="flex flex-col shadow-lg m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300 rounded">
      <img
        className="rounded-lg h-40"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-1 text-lg">{displayName}</h3>
      <h4 className="py-0.5">{cuisines2.join(", ")}</h4>
      <h4 className="py-0.5">{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestroCard) => {
  return(props) => {
    return(
      <div>
        <label className="absolute bg-gray-800 text-white rounded-md m-1 p-1">Promoted</label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
