import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { About } from "../src/pages/About";
import { Contact } from "../src/pages/Contact";
import { Register } from "../src/pages/Register";
import { Login } from "./pages/Login";
import { Navbar1 } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Error } from "./pages/error.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import VideoModule from "./pages/VideoModule.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";
import VideoPage from "./components/VideoPage.jsx";

const App = () => {
  return (
    <>
      <main className="font-montserrat bg-light w-full min-h-screen">
        <BrowserRouter>
          <Navbar1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/video" element={<VideoModule/>} />
            <Route path="/video/:videoUrl" element={<VideoPlayer/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
