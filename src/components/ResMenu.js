import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import ResItems from "./ResItems";

const ResMenu = () => {
  const { resId } = useParams();
  //the state management of this component is encapsulated by the useResMenu hook
  //if the state changes in the hook the component re renders
  const data = useResMenu(resId);
  const resData = data?.data?.cards[0]?.card?.card?.info;
  const len = data?.data?.cards.length;
  const menu =
    data?.data?.cards[len - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  if (!resData) {
    return <Shimmer />;
  }
  const { name, avgRating, costForTwoMessage } = resData;
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-xl">{name}</h1>
        <p>{avgRating}</p>
        <p>Cost : {costForTwoMessage}</p>
      </div>
      <div className="w-7/12 mx-auto bg-gray-100 p-5">
        <ResItems data={menu} />
      </div>
    </div>
  );
};
export default ResMenu;
