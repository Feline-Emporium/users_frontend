import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import "../CatListPage/CatListPage.scss";

import { useAuth } from "../../contexts/AuthContext";

function ProfilePage() {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();
  const [cats, setCats] = useState([]);

  async function handleSubmit() {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      alert("Failed to logout");
    }
  }

  useEffect(() => {
    getCatList();
  }, []);

  async function getCatList() {
    await axios
      .get("http://localhost:3001/post/get/" + currentUser.uid)
      .then((response) => {
        setCats(response.data);
      });
  }
  const rows = [];
  for (let i = 0; i < cats.length; i += 3) {
    rows.push(
      <div className="cat-row" key={i}>
        {cats.slice(i, i + 3).map((cat, j) => (
          <div className="cat-card" key={i + j}>
            <div className="cat-details">
              <h3>{cat.name}</h3>
              <p>Race: {cat.breed}</p>
              <p>Gender: {cat.gender}</p>
              <p>Age: {cat.age}</p>
              <p>{cat.description}</p>
              <p>{`DKK: ${cat.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      ProfilePage for: {currentUser.email}
      <h2>Your Cats</h2>
      <div className="cat-list-page">{rows}</div>
      <button
        className="button"
        style={{ backgroundColor: "red" }}
        onClick={() => handleSubmit()}
      >
        Log Out
      </button>
    </div>
  );
}

export default ProfilePage;
