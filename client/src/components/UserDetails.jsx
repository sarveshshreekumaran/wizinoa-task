import React, { useEffect, useState } from "react";

function UserDetails() {
  const [userDetails, setUserDetails] = useState({});
  const port =
    process.env.REACT_APP_PRODUCTION_PORT || process.env.REACT_APP_DEV_PORT;
  useEffect(() => {
    async function getUserDetails() {
      const response = await fetch(`${port}/userdetails`);
      const userdetails = await response.json();
      // console.log(userdetails);
      return userdetails;
    }
    getUserDetails().then((data) => {
      setUserDetails(data);
      // console.log(data);
    });
  }, []);

  return (
    <div>
      <p>Username: {userDetails.userInfo?.username}</p>
      <p>Home Directory: {userDetails.userInfo?.homedir}</p>
      <p>OS: {userDetails.version}</p>
      <p>
        OS Type: {userDetails.type}, OS Release: {userDetails.release}
      </p>
      <p>Hostname: {userDetails.hostname}</p>
      <p>IP: {userDetails.ip}</p>
      <p>Browser: {userDetails.browser}</p>
    </div>
  );
}

export default UserDetails;
