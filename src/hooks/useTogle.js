import { useState } from "react";

const useTogle = value => {
  const [state, setState] = useState(value);
  const handleTogle = () => {
    setState(!state);
  };
  return [state, handleTogle];
};

export default useTogle;
