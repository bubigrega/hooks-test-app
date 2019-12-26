import React from "react";
import Button from "@material-ui/core/Button";

import useTogle from "./hooks/useTogle";

const CustomHook = () => {
  const [isHappy, setHappy] = useTogle(true);
  const [banana, setBanana] = useTogle(false);
  const [danger, setDanger] = useTogle(true);

  return (
    <div>
      <p onClick={setHappy}>Click to toggle: {isHappy ? "😄" : "😠"}</p>
      <p onClick={setBanana}>Click to toggle: {banana ? "🍌" : "🍎"}</p>
      <Button
        size="large"
        onClick={setDanger}
        variant="contained"
        color={danger ? "secondary" : "primary"}
      >
        {danger ? "danger" : "ok"}
      </Button>
    </div>
  );
};

export default CustomHook;
