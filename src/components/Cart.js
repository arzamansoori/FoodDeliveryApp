import { useSelector } from "react-redux";
import ResItemList from "./ResItemList";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("CartItems", cartItems);

  let itemPrice = {};
  cartItems.forEach((item) => {
    itemPrice[item.card.info.id] = item.card.info.price
      ? item.card.info.price / 100
      : item.card.info.defaultPrice / 100;
  });
  console.log("cartItems post price", cartItems);
  console.log("itemprice", itemPrice);

  let totalBill = Object.values(itemPrice).reduce((acc, cv) => {
    return acc + cv
  })

  console.log("TotalBill", totalBill)

  return (
    <div className="space-y-7">
      <div className="flex flex-col m-3 items-center">
        <div className="m-1 p-2 font-medium text-lg">CART</div>
        <button className="text-red-800 bg-slate-100 font-medium border border-black rounded-lg p-1">
          Clear Cart
        </button>
      </div>

      <div>
        <div>
          {cartItems.map((item) => (
            <div key={item.card.info.id} className="">
              <div className="">
                <div className="mx-28 px-8 flex justify-between py-2 bg-slate-100 rounded-md border-gray-200 border-b-2 flex-wrap">
                  <span className="font-normal ">{item.card.info.name}</span>
                  <span className="">
                    ₹
                    {itemPrice[item.card.info.id]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <span className="font-bold text-xl">
          Total Bill - {totalBill}
        </span>
      </div>
    </div>
  );
};

export default Cart;
