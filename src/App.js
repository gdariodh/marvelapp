import React from "react";
// components
import Header from "./components/Layout/Header";
// routing
import Rutas from "./rutas";
// contexts
import MarvelState from "./context/state/marvelState";
import PeleasState from "./context/state/peleasState";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <MarvelState>
        <PeleasState>
          <Router>
            <main className='bg-gray-200 bg-opacity-25 min-h-screen'>
              <div className='container mx-auto'>
                <Header/>
                <div className='mt-20 '>
                  <Rutas />
                </div>
              </div>
            </main>
          </Router>
        </PeleasState>
      </MarvelState>
    </>
  );
}

export default App;
