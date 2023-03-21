import React, { useEffect } from "react";
import Footer from "../components/Footer";
import AppBar from "../components/header/AppBar";
import useHeader from "../hooks/useHeader";

const PageNotFound = () => {
  const { header, setHeader } = useHeader();

  useEffect(() => {
    setHeader("404 || Page Not Found");
  }, [setHeader]);

  return (
    <>
      <AppBar />
      <div className="flex flex-col h-[100vh] bg-[#FEFBFF] justify-center items-center">
        <h1 className="text-red-400 text-3xl">
          {header ? header : "No present Header"}
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
