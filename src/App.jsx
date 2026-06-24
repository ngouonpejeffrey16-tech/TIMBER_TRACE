import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Marketing } from './pages/Marketing';
import { Browse } from './pages/Browse';
import { Detail } from './pages/Detail';
import { Dashboard } from './pages/Dashboard';
import { ListYourLand } from './pages/ListYourLand';

export function App() {
  const [saved, setSaved] = React.useState([2]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Marketing />} />
        <Route path="/browse" element={<Browse saved={saved} setSaved={setSaved} />} />
        <Route path="/listing/:id" element={<Detail saved={saved} setSaved={setSaved} />} />
        <Route path="/dashboard" element={<Dashboard saved={saved} />} />
        <Route path="/list" element={<ListYourLand />} />
      </Routes>
    </BrowserRouter>
  );
}
