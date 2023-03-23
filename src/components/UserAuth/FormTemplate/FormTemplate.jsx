import { useState, useEffect } from "react";
import { Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FormTemplate.css";

import { useAuth } from "../../../contexts/AuthContext";

export default function FormTemplate(props) {
  const { title, type } = props;
  const navigate = useNavigate();
  const { currentUser, register, login } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);
      switch (type) {
        case "login":
          login(email, password);
          break;

        case "register":
          register(email, password);
          console.log(currentUser);
          break;

        default:
          throw new Error("Invalid type");
      }
    } catch (e) {
      alert("Failed to register");
    }
    setLoading(false);
  }

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
      {loading && <p>Loading...</p>}
    </div>
  );
}
