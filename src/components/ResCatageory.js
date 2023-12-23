import ToogleMenu from "./ToogleMenu";
import { useState } from "react";

const ResCatageory = ({ item, visible, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="m-3 p-3  border-blue-100 border-b-2 cursor-pointer">
      <div
        className="flex justify-between font-bold text-lg"
        onClick={handleClick}
      >
        <span>{item.card.card.title}</span>
        <span>V</span>
      </div>
      {visible && <ToogleMenu data={item?.card?.card?.itemCards} />}
    </div>
  );
};
export default ResCatageory;
