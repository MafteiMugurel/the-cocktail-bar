import "./App.css";
import Cocktail from "./Pages/Cocktail";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:id" element={<Cocktail />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
