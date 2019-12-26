import React from "react";
import useInput from "./hooks/useInput";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CustomInputHook = () => {
  const [email, setEmail, resetEmail] = useInput("");
  const [password, setPassword, resetPassword] = useInput("");
  const reset = () => {
    resetEmail();
    resetPassword();
  };
  return (
    <div>
      <p>
        Email: {email}. Password: {password}.
      </p>
      <TextField
        margin="normal"
        variant="outlined"
        label="Email"
        value={email}
        onChange={setEmail}
      />
      <TextField
        label="Password"
        margin="normal"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <Button variant="outlined" onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default CustomInputHook;
