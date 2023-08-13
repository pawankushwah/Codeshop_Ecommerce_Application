"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const [usersData, setUsersData] = useState({});
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function getUserData() {
    const jwtToken = localStorage.token;
    let response = await fetch("/api/auth/getUserData", {
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
      method: "POST",
    });

    let data = await response.json();
    if(response.status !== 200) { 
      window.location.pathname = '/auth/login';
      localStorage.clear()
    }
    if (response.status) setUsersData(data);
  }

  function checkLocalStorageForToken() {
    if (
      !localStorage.token &&
      !localStorage.refreshToken &&
      !localStorage.userId
    )
      router.push("/auth/login");
  }

  useEffect( () => {
    checkLocalStorageForToken();
    getUserData().then(() => setIsPageLoading(false));
  }, []);

  async function logoutTheUser() {
    const jwtToken = localStorage.token;
    setIsLoading(true);
    let response = await fetch("/api/auth/logout", {
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
      method: "DELETE",
    });

    let data = await response.json();
    setIsLoading(false);
    if (response.status === 200) {
      localStorage.clear();
      window.location.pathname = "/auth/login";
    }
  }

  return (
    <>
      {isPageLoading && (
        <>
          <div className="absolute flex flex-col bg-white w-screen h-screen justify-center items-center transition-all ease-in-out">
            <div className="flex justify-center items-center">
              <Image
                src={"/images/codeshop logo.png"}
                width={100}
                height={100}
                alt="codeshop webiste Logo"
                className="fixed object-cover"
              />
              <div className="w-48 h-48 border-8 border-r-blue-500 rounded-full animate-spin"></div>
            </div>
            <div className="text-2xl mt-4">Loading...</div>
          </div>
        </>
      )}
      <div className="h-screen flex justify-center items-center">
        <div className="p-2 bg-blue-300 border-2 border-black">
          <div>Name: {usersData.firstName + " " + usersData.lastName}</div>
          <div>Email: {usersData.email}</div>
          <div>Mobile: {usersData.mobile && usersData.mobile}</div>
          <div>Username: {usersData.username}</div>
          <div>userId: {usersData._id}</div>
          <button
            className="bg-white flex items-center rounded-lg p-2"
            onClick={logoutTheUser}
          >
            Logout
            {isLoading && (
              <>
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 ml-4 border-4 border-blue-500 border-r-white rounded-full animate-spin"></div>
                </div>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
