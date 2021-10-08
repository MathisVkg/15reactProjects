import React from 'react';
import Review from './Review';


function App() {
  return (
    <main>
      <section className="container">
        <h2 className="title">Ours Reviews</h2>
        <div className="underline"></div>
      </section>
      <Review />
    </main>
  )
}

export default App;
