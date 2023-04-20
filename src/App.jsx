import { Container } from "@mui/system";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import StartPage from "./components/HomePage/HomePage";
import LoginPage from "./components/UserAuth/LoginPage";
import RegisterPage from "./components/UserAuth/RegisterPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import PostPage from "./components/PostPage/PostPage";
import { ContactPage } from "./components/ContactPage";
import CatListPage from "./components/CatListPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="Main">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/post" element={<PostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/catlist" element={<CatListPage />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
