import { useDispatch } from "react-redux";
import { resimage } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ToogleMenu = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="flex justify-between m-5 p-5"
          >
            <div className="w-7/12">
              <div className="text-lg">{item?.card?.info?.name}</div>
              <div>
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}{" "}
                -{item?.card?.info?.description}
              </div>
            </div>
            <div className="w-3/12">
              <span
                className="absolute bg-black text-white"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add
              </span>
              <img src={resimage + item?.card?.info?.imageId}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ToogleMenu;
