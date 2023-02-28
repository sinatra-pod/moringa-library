import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import LoginView from "./pages/LoginView";
import RegisterView from "./pages/RegisterView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
    </Routes>
  );
}

export default App;
