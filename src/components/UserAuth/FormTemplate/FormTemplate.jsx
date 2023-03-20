import { useState } from "react";
import { Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FormTemplate.css";

import Login from "./HandleSubmit/Login";
import Register from "./HandleSubmit/Register";

export default function FormTemplate(props) {
  const { title, type } = props;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    switch (type) {
      case "login":
        Login(email, password).then(() => {
          navigate("/profile");
        });
        break;
      case "register":
        Register(email, password).then(() => {
          navigate("/login");
        });
        break;
      default:
        throw new Error("Invalid type");
    }
  };

  return (
    <div className="formTemplateContainer">
      <Typography variant="h4">{title}</Typography>
      <TextField
        label={"Email..."}
        type={"email"}
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <TextField
        label={"Password..."}
        type={"password"}
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button
        variant="contained"
        className="formButton"
        onClick={() => handleSubmit()}
      >
        Log in
      </Button>
    </div>
  );
}
