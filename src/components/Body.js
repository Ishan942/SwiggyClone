import { useEffect, useState } from "react";
import Rescard, { withNewLabel } from "./Rescard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listofres, setListofres] = useState([]);
  const onlinestatus = useOnlineStatus();
  console.log(listofres);

  const NewResCard = withNewLabel(Rescard);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const djson = await data.json();
      const restaurants =
        djson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(restaurants);
      setListofres(restaurants);
    } catch (Error) {
      // console.log(Error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (onlinestatus == "offline") {
    return <h1>You are Offline Please Try Again</h1>;
  }
  return (
    <div className="body">
      <div className="search">Search Bar</div>
      <div className="flex flex-wrap m-auto w-11/12">
        {listofres && listofres.length > 0 ? (
          listofres.map((restaurant, index) =>
            restaurant?.info?.isNewlyOnboarded ? (
              <Rescard
                key={restaurant?.info?.id}
                restaurant={restaurant?.info}
              />
            ) : (
              <NewResCard
                key={restaurant?.info?.id}
                restaurant={restaurant?.info}
              />
            )
          )
        ) : (
          <Shimmer /> // Add a loading indicator or placeholder component
        )}
      </div>
    </div>
  );
};

export default Body;
