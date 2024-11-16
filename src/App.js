import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";


//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";


//pages
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import DashBoard from "./pages/DashBoard/DashBoard";
import CreatePost from "./pages/CreatePost/CreatePost";

//context
import { AuthProvider } from "./context/AuthContext";

//Components
import NavBar from "./compoents/NavBar";
import Footer from "./compoents/Footer";

function App() {

  const[user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

    if(loadingUser){
      return <p>Carregando...</p>
    }


  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/posts/create" element={<CreatePost />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
