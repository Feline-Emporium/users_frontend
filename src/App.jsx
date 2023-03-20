import { Container } from "@mui/system";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar/NavBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import StartPage from "./components/HomePage/HomePage";
import LoginPage from "./components/UserAuth/LoginPage";
import RegisterPage from "./components/UserAuth/RegisterPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Container maxWidth="md">
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<StartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
