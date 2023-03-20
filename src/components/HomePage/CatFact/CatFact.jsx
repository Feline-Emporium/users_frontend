import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from "@mui/material";
import "./CatFact.css";

import cat from "../../../assets/cat2.png";

export default function getFirstFact() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    getCatFact();
  }, []);

  async function getCatFact() {
    await axios("https://catfact.ninja/fact")
      .then((response) => setCatFact(response.data.fact))
      .catch((error) => console.log(error));
  }
  return (
    <div className="catFactContainer">
      <Card className="catFactCard">
        <CardMedia
          component="img"
          sx={{ width: 200, height: 220 }}
          image={cat}
          alt="Cat photo"
        />
        <Box className="catFactBox">
          <CardContent>
            <Typography variant="h5">Did you know?</Typography>
            <Divider />
            <Typography className="catFactText">{catFact}</Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
