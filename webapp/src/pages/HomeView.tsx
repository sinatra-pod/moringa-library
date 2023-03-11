import React, { useEffect } from "react";
import useHeader from "../hooks/useHeader";
import NavBar from "../components/navigation/NavBar";

const HomeView = () => {
  const { header, setHeader } = useHeader();

  useEffect(() => {
    setHeader("Home Page");
  }, [setHeader]);

  return (
      <>
        <NavBar/>
        <div className="flex flex-col h-[100vh] justify-center items-center">
          <h1 className="text-red-400 text-3xl">{header ? header : "No present Header"}</h1>
        </div>
      </>
  );
};

export default HomeView;
