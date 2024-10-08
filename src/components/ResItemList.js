import { CDN_URL } from "../utils/constants";
import { addItems } from "../reduxComponents/cartSlice"
import { useDispatch } from "react-redux";

const ResItemList = ({ items }) => {
  // const [color, setColor] = useState("blue");

  // const click = (color) => {
  //   setColor(color);
  // };

  // useEffect(() => {
  //   document.body.style.backgroundColor = color;
  // }, [color]);

  //dispatching an action
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          data-testid = "foodItems"
          className="flex justify-between items-center bg-slate-100 rounded-md border-gray-200 border-b-2"
        >
          <div className="w-9/12">
            <div className="flex flex-col py-2">
              <span className="font-normal">{item.card.info.name}</span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="font-light text-sm pb-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="flex flex-col-reverse items-center flex-nowrap">
              {/* <button className="px-1 mx-2 absolute bg-slate-100 border-black border-2 rounded-md">Add +</button> */}
              <img
                className="w-full"
                src={CDN_URL + item.card.info.imageId}
              ></img>
              {/* working on this button */}
              <button
                className="border-2 absolute border-pink-300 p-0.5 px-2 bg-green-100 rounded-md font-mono"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResItemList;
