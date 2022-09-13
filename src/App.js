import React from 'react';

import { Footer, Header, Catalog, Home } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
