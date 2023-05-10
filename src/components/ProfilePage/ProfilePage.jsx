import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProfilePage.css";
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

  const throwUnkownError = () => {
    throw new Error("This is an unknown error waiting to be caught by Sentry");
  };

  return (
    <div>
      <h1>
        😳Hi Fabulous😳 <br />
      </h1>
      <h3>
        or should I call you <br />
      </h3>
      <h1 className="text">✨{currentUser.email}✨</h1>
      <h4>I personally hope you have a pawsome day!</h4>
      <br />
      <br />
      <h2>You can find your cats for sale below here</h2>
      <div className="cat-list-page">{rows}</div>
      <button
        className="button"
        style={{ backgroundColor: "red" }}
        onClick={() => handleSubmit()}
      >
        Log Out
      </button>
      <button onClick={throwUnkownError}>Dont click</button>
    </div>
  );
}

export default ProfilePage;
