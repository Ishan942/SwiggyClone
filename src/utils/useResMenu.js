import { useEffect, useState } from "react";

const useResMenu = (resId) => {
  console.log("custom hook called");
  const [resData, setResData] = useState(null);

  const [count, setCount] = useState(0);
  const fetchResDetails = async () => {
    const details = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3071588&lng=73.1812187&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const data = await details.json();
    console.log("use efffect done");
    setResData(data);
  };

  useEffect(() => {
    fetchResDetails();
  }, []);

  return resData;
};

export default useResMenu;
