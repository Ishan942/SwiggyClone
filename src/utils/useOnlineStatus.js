const { useEffect, useState } = require("react");

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", (event) => {
      console.log("online");
      setOnlineStatus(true);
    });
    window.addEventListener("offline", (event) => {
      console.log("offline");
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
