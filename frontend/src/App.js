import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import EconomicCalendar from './pages/EconomicCalendar/EconomicCalendar';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
      <Routes>
        <Route path='/economic_calendar/' element={<EconomicCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
