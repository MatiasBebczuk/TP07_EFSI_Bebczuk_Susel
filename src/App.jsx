import './App.css'
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TP7_EFSI_Bebczuk_Susel/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/TP7_EFSI_Bebczuk_Susel/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/TP7_EFSI_Bebczuk_Susel/Contacto" element={<Contacto />} />
          <Route path="/TP7_EFSI_Bebczuk_Susel/Productos" element={<Productos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}