import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Glavniy from "./pages/Glavniy";
import Platforma from "./pages/Platforma.js";
import Tarif from "./pages/Tarif";
import Kompaniya from "./pages/Kompaniya";
import Podderjka from "./pages/Podderjka";
import Blog from "./pages/Blog";
// global styles
import "./assets/styles/normalize.css";
import "./assets/styles/flex-box.css";
import "./assets/styles/global.css";

function App() {
  return (
    <div className="App">
      {/* header */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Glavniy />} />
            <Route path="/platforma" element={<Platforma />} />
            <Route path="/tarif" element={<Tarif />} />
            <Route path="/kompaniya" element={<Kompaniya />} />
            <Route path="/podderjka" element={<Podderjka />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* footer */}
    </div>
  );
}

export default App;
