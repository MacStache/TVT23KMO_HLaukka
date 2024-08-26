import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Weather from "./pages/Weather";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import UserProvider from "./context/UserProvider";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
    return (
        <UserProvider>
            <Header></Header>
            <Navbar></Navbar>
            <div className="container">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/weather" element={<Weather />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/about" element={<About />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer></Footer>
        </UserProvider>
    );
}

export default App;
