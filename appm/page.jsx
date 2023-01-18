"use client";
import React, { useContext } from "react";
import Login from "../components/Login";
import UserDashboard from "../components/userDashboard";
import { AuthContext } from "../context/AuthContext";

const page = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </div>
  );
};

export default page;
