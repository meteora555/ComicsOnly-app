import React from 'react';
import { Hot, News, Latest, Side } from '../components';

function Main() {
  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="container">
          <Hot />
          <News />
          <Latest />
        </div>
        <Side />
      </div>
    </main>
  );
}

export default Main;
