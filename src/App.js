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
            <main className="bg-gray-100 bg-opacity-25 min-h-screen">
              <div className="w-full">
                <Header />
              </div>
              <div className="mt-6 ">
                <Rutas />
              </div>
            </main>
          </Router>
        </PeleasState>
      </MarvelState>
    </>
  );
}

export default App;
