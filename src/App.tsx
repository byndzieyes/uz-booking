import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans">
        <header className="bg-indigo-900 text-white py-4 px-6 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center font-bold text-xl gap-2">Railway</div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:trainId" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
