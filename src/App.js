import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar.js'; 
import Footer from './footer.js'

function App() {
  return (
    <div className="container">
      <NavBar /> 

      <main role="main">
        <div className="mt-5">
          <h1>Main Content Area</h1>
          <p>This is your main content area. You can put your content here.</p>
        </div>
      </main>
     <Footer />
    </div>
  );
}

export default App;
