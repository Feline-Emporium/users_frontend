import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import CookieConsentForm from "./CookieConsentForm";
import "./HomePage.css";

import { useAuth } from "../../contexts/AuthContext";
import catLogo from "../../assets/cat.png";
import cat3 from "../../assets/cat3.png";
import CatFact from "./CatFact/CatFact";

export default function HomePage() {
  const navigate = useNavigate();

  const handleOnClick = (link) => {
    navigate("/" + link);
  };

  return (
    <div className="homePageContainer">
      <CookieConsentForm />
      <a target="_blank">
        <img src={cat3} className="zoom-in-out-box" alt="Cat Logo" />
      </a>
      <br />
      <br />
      <button onClick={() => handleOnClick("catlist")} className="button">
        See available cats
      </button>
      <br />
      <br />
      <Typography variant="h5" className="textshake">
        Welcome to your one-stop catshop! Your portal for everything cats!
      </Typography>
      <br />
      <CatFact />
    </div>
  );
}
