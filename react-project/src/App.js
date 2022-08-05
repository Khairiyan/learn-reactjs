import "./App.css";
// TODO: answer here
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./api/config";
import PostCard from "./components/PostCard";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import { SessionProvider } from "./context/SessionContext";

function App() {
  // TODO: answer here

  return (
    <SessionProvider>
      <div aria-label="App">
        <Navbar />
        <PostCard />
        <UploadForm />
      </div>
    </SessionProvider>
  );
}

export default App;
