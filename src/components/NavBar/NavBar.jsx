import { useEffect } from "react";
import { AppBar, Grid, Toolbar, Typography, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";
import PostPage from "../PostPage/PostPage";
import meow from "../../assets/mp3/meow.mp3";
import meownibba from "../../assets/mp3/meownibba.mp3";

import { useAuth } from "../../contexts/AuthContext";
import auth from "../../config/firebase";
import catLogo from "../../assets/cat.png";

export default function Navbar() {
  const { currentUser } = useAuth();
  const pages = [
    { label: "Cat List", link: "/cats" },
    { label: "Post", link: "/post" },
    { label: "bruh", link: "/bruh" },
  ];

  const playMeowSound = () => {
    const audio = new Audio(meow);
    audio.play();
  };

  const playMeowSoundDeep = () => {
    const audio = new Audio(meownibba);
    audio.play();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = currentUser && (await currentUser.getIdToken());

        const payloadHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await fetch("http://localhost:3001", payloadHeader);
        console.log(await res.text());
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Grid container>
        <AppBar className="navBar" style={{ background: "#3B719F" }}>
          <Toolbar>
            <Grid item md={4}>
              <Link to="/" key={"Logo"}>
                <button
                  className="navBarMenuItem navBarHome"
                  onClick={playMeowSound}
                >
                  <img src={catLogo} className="navBarLogo" alt="Cat Logo" />
                  <Typography variant="h5">Home</Typography>
                </button>
              </Link>
            </Grid>
            {pages.map((page) => (
              <Grid item key={page.label}>
                <Link to={page.link}>
                  <button className="navBarMenuItem">
                    <Typography textAlign="center">{page.label}</Typography>
                  </button>
                </Link>
              </Grid>
            ))}
            <Grid item md={8}>
              {!currentUser ? (
                <Link to="/login" key={"Login"}>
                  <button className="navBarMenuItem navBarProfile">
                    <Typography variant="h5">Log in</Typography>
                  </button>
                </Link>
              ) : (
                <Link to="/profile" key={"Profile"}>
                  <button
                    className="navBarMenuItem navBarProfile"
                    onClick={playMeowSoundDeep}
                  >
                    <Typography variant="h5">Profile</Typography>
                  </button>
                </Link>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}
