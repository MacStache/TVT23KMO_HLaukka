import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/Notfound";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
    const [user, setUser] = useState(null);
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="container">
                <Routes>
                    <Route path="/" exact element={<Login setUser={setUser}/>} />
                    <Route path="/about" element={<About user={user}/>} />
                    <Route path="/home" element={<Home user={user}/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
