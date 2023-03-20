import { useState, useEffect } from "react";
import catLogo from "../../assets/cat.png";
import "./HomePage.css";
import { Typography } from "@mui/material";

import CatFact from "./CatFact/CatFact";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [catFact, setCatFact] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="homePageContainer">
      <a target="_blank">
        <img src={catLogo} className="logo" alt="Cat Logo" />
      </a>
      <Typography variant="h3">Welcome to One-Stop CatShop</Typography>
      <Typography variant="h4">Your portal for everything cat!</Typography>
      <div>
        <CatFact />
      </div>
    </div>
  );
}
