import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import CookieConsentForm from "./CookieConsentForm";
import "./HomePage.css";

import { useAuth } from "../../contexts/AuthContext";
import catLogo from "../../assets/cat.png";
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
        <img src={catLogo} className="logo" alt="Cat Logo" />
      </a>
      <Typography variant="h3">Welcome to One-Stop CatShop</Typography>
      <Typography variant="h4">Your portal for everything cats!</Typography>
      <br />
      <button onClick={() => handleOnClick("catlist")} className="button">
        See available cats
      </button>
      <br />
      <CatFact />
    </div>
  );
}
