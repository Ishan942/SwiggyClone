const { useEffect, useState } = require("react");

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState("online");
  useEffect(() => {
    window.addEventListener("online", (event) => {
      console.log("online");
      setOnlineStatus("online");
    });
    window.addEventListener("offline", (event) => {
      console.log("offline");
      setOnlineStatus("offline");
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
