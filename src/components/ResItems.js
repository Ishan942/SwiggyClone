import ToogleMenu from "./ToogleMenu";
import ResCatageory from "./ResCatageory";
import { useState } from "react";

const ResItems = ({ data }) => {
  //ResItemHelper is creted to add individual state to each and every menu option
  const [showIndex, setShowIndex] = useState(null);
  return (
    <div className="">
      {data.map((item, index) => {
        // Check the condition
        if (
          item.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          // Return the JSX element
          return (
            //res catageory is now a controlled component state is being passsed by parent
            <ResCatageory
              key={item.card.card.id}
              item={item}
              visible={index === showIndex ? true : false}
              setShowIndex={() => {
                showIndex === index ? setShowIndex(null) : setShowIndex(index);
              }}
            />
          );
        }

        // Return null if the condition is not met
        return null;
      })}
    </div>
  );
};
export default ResItems;
