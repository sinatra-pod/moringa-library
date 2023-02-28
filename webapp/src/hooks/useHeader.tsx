import { useState } from "react";

const useHeader = () => {
  const [header, setHeader] = useState<String>("");

  return { header, setHeader };
};

export default useHeader;
