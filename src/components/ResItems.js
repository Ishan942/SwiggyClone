import ToogleMenu from "./ToogleMenu";
import ResItemHelper from "./ResItemHelper";

const ResItems = ({ data }) => {
  //ResItemHelper is creted to add individual state to each and every menu option
  return (
    <div className="">
      {data.map((item) => {
        // Check the condition
        if (
          item.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          // Return the JSX element
          return <ResItemHelper item={item} />;
        }

        // Return null if the condition is not met
        return null;
      })}
    </div>
  );
};
export default ResItems;
