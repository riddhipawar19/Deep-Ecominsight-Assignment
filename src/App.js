import './App.css';
import Coffee from './components/Coffee/Coffee';
import Availability from './components/Availability/Availability';
import Location from './components/Location/Location';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route index element={<Coffee />} />
          <Route path="availability" element={<Availability />} />
          <Route path="location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
