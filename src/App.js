import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Cryptocurrencies from "./pages/Cryptocurrencies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cryptocurrencies/Bitcoin" element={<Home />} />
        <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
