import { Container } from "@mui/system";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import StartPage from "./components/HomePage/HomePage";
import LoginPage from "./components/UserAuth/LoginPage";
import RegisterPage from "./components/UserAuth/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Container maxWidth="md">
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<StartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
