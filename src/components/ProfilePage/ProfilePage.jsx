import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, TextField } from "@mui/material";

import { useAuth } from "../../contexts/AuthContext";

function ProfilePage() {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();

  async function handleSubmit() {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      alert("Failed to logout");
    }
  }

  return (
    <div>
      ProfilePage for: {currentUser.email}
      <Button
        variant="contained"
        color="error"
        className="formButton"
        onClick={() => handleSubmit()}
      >
        Log Out
      </Button>
    </div>
  );
}

export default ProfilePage;
