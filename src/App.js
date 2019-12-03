import React from "react";
import RecipeContextProvider from "./contexts/RecipeContext";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";

function App() {
  return (
    <div className="App">
      <RecipeContextProvider>
        <Routing>
          <Navbar />
        </Routing>
      </RecipeContextProvider>
    </div>
  );
}

export default App;
