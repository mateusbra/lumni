import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import StickSocialMedia from './components/StickSocialMedia';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contact />} />
      </Routes>
      <StickSocialMedia />
    </>
  );
}

export default App;
