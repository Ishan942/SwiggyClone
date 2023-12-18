import { resimage } from "../utils/constants";

const ToogleMenu = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="flex justify-between m-5 p-5">
            <div>
              <div className="text-lg">{item?.card?.info?.name}</div>
              <div>
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}{" "}
                -{item?.card?.info?.description}
              </div>
            </div>
            <div className="w-16">
              <img src={resimage + item?.card?.info?.imageId}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ToogleMenu;
