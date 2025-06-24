import './App.css'
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TP5_EFSI2-Bebczuk_Susel/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/TP5_EFSI2-Bebczuk_Susel/ruta1" element={<componente />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
