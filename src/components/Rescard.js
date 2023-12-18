import { Link } from "react-router-dom";
import { resimage } from "../utils/constants";
const Rescard = (props) => {
  const name = props.restaurant.name;
  const cuisines = props.restaurant.cuisines;
  return (
    <Link to={"restraunts/" + props.restaurant.id}>
      <div className=" w-56  m-5 p-5 border-2 border-slate-300 rounded-lg hover:border-slate-500 hover:rounded-lg ">
        <img
          className="food-image"
          src={resimage + props.restaurant.cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <div className="text-ellipsis overflow-hidden">
          {cuisines.join(",")}
        </div>
        <h4>200 For Two ,45 minutes</h4>
      </div>
    </Link>
  );
};
//higher order component takes a component and returns enhanced component
export const withNewLabel = (Rescard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute  border-2 border-black bg-black text-white rounded-lg">
          New
        </label>
        <Rescard {...props} />
      </div>
    );
  };
};
export default Rescard;
