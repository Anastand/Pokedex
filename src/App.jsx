import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { PokeCard } from "./components/PokeCard";
import { useState, useEffect } from "react";
function App() {
  const [selectedpokemon, setselectedpokemon] = useState(0);

  return (
    <>
      <Header />
      <SideNav
        selectedpokemon={selectedpokemon}
        setselectedpokemon={setselectedpokemon}
      />
      <PokeCard selectedpokemon={selectedpokemon} />

      {/* debugging */}
      {console.log("from app")}
    </>
  );
}

export default App;
