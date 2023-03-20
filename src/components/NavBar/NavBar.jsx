import { AppBar, Grid, Toolbar, Typography, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";

import catLogo from "../../assets/cat.png";

export default function Navbar() {
  const pages = [
    { label: "Cat List", link: "/cats" },
    { label: "Post", link: "/post" },
    { label: "bruh", link: "/bruh" },
  ];

  return (
    <div>
      <Grid container>
        <AppBar className="navBar" style={{ background: "#3B719F" }}>
          <Toolbar>
            <Grid item md={4}>
              <Link to="/" key={"Logo"}>
                <button className="navBarMenuItem navBarHome">
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
              <Link to="/login" key={"Login"}>
                <button className="navBarMenuItem navBarProfile">
                  <Typography variant="h5">Log in</Typography>
                </button>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}
