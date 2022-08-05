import { useEffect, useState } from "react";
import React from "react";

import { getSession, auth } from "../api/auth";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import axios from "axios";
import { API_URL, BASE_URL } from "../api/config";

export default function Navbar() {
  // TODO: answer here
  const user = useContext(SessionContext).user;
  const setUser = useContext(SessionContext).setUser;
  const isLogin = useContext(SessionContext).isLoggedIn;
  const setIsLogin = useContext(SessionContext).setIsLoggedIn;

  const getUser = async () => {
    try {
      const getData = await axios.get(`${API_URL}/auth/session`, {
        withCredentials: true,
      });

      if (getData.data && Object.keys(getData.data).length === 0 && Object.getPrototypeOf(getData.data) === Object.prototype) {
        setIsLogin(false);
        console.log("get data false", getData);
      } else {
        setIsLogin(true);
        setUser(getData.data.user);
        console.log("get data true", getData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div aria-label="Navbar">
      <img aria-label="App Logo" />
      <div className="navbar-menu">
        <a aria-label="App Title" href="/">
          Instagram Clone
        </a>
        {isLogin ? (
          <a aria-label="Profile" href="/profile">
            {user ? user.name : ""}
          </a>
        ) : (
          <button
            aria-label="Login"
            onClick={() => {
              auth();
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
