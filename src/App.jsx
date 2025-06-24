import './App.css'
import Navbar from "./Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TP5_EFSI2-Bebczuk_Susel/" element={<Navbar />}>
          <Route index element={<Home />} />
          {/* <Route path="/TP5_EFSI2-Bebczuk_Susel/ruta1" element={<componente />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
