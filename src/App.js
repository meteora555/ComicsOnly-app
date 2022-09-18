import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Header, Catalog, Home, Reader } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/" element={<Home />} />
        <Route path="/reader" element={<Reader />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
