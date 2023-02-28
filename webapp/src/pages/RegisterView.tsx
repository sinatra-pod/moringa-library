import React, { useEffect } from "react";
import useHeader from "../hooks/useHeader";

const RegisterView = () => {
  const { header, setHeader } = useHeader();

  useEffect(() => {
    setHeader("Register Page");
  }, [setHeader]);

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <h1 className="text-red-400 text-3xl">{header ? header : "No present Header"}</h1>
    </div>
  );
};

export default RegisterView;
