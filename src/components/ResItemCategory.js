import { useState } from "react";
import ResItemList from "./ResItemList";

const ResItemCategory = ({ data }) => {

  // Declaring state variable to control Acordion hide feature
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 mx-auto my-4 p-3 bg-gray-100 shadow-lg">
      {/* Acordion Header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-semibold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        <span>
          {showItems && <ResItemList items={data.itemCards} />}
        </span>
      </div>
      {/* Acordion Body */}
    </div>
  );
};

export default ResItemCategory;
