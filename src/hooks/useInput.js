import { useState } from "react";

const CustomInputHook = initValue => {
  const [state, setState] = useState(initValue);
  const setValue = e => {
    setState(e.target.value);
  };
  const reset = () => {
    setState(initValue);
  };
  return [state, setValue, reset];
};

export default CustomInputHook;
