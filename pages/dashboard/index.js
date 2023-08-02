import { useEffect, useState } from "react";

export default function Index() {
  const [authorizationData, setAuthorizationData] = useState({});
  const [usersData, setUsersData] = useState({});
  async function authorizeTheUser() {
    const jwtToken = localStorage.token;
    console.log(jwtToken);
    let response = await fetch("/api/auth/verifyJWT", {
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
      method: "POST",
    });

    let data = await response.json();
    setAuthorizationData(data);
  }

  async function getUserData() {
    const jwtToken = localStorage.token;
    console.log(jwtToken);
    let response = await fetch("/api/auth/getUserData", {
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
      method: "POST",
    });

    let data = await response.json();
    setUsersData(data);
  }
  useEffect(() => {
    authorizeTheUser();
    getUserData();
  }, []);
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="p-2 bg-blue-300 border-2 border-black">
          <div>Name: {usersData.firstName + " " + usersData.lastName}</div>
          <div>Email: {usersData.email}</div>
          <div>Mobile: {usersData.mobile && usersData.mobile}</div>
          <div>Username: {usersData.username}</div>
          <div>userId: {usersData._id}</div>
        </div>
      </div>
    </>
  );
}
