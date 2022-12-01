import GitProfile from "pages/Search/GitProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const RoutesDom = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search_profile" element={<GitProfile />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesDom;
