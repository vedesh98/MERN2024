import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { About } from "../src/pages/About";
import { Contact } from "../src/pages/Contact";
import { Service } from "../src/pages/Service";
import { Register } from "../src/pages/Register";
import { Login } from "./pages/Login";
import { Navbar1 } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Error } from "./pages/error.jsx";
import { Video } from "./pages/video.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/video" element={<Video />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
