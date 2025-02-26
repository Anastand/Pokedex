import { first151Pokemon, getFullPokedexNumber } from "../utils";
export function SideNav() {
  // this will render all the pokemon ~150 , select and find info about that pokemon
  // this is for mobile phones
  return (
    <nav>
      <div className={"header"}>
        <h1 className="text-gradient">Pokédex</h1>
          </div>
          <input type="text" />
      {first151Pokemon.map((pokemon, pokemonIDX) => {
        return (
          <button key={pokemonIDX} className={"nav-card"}>
            <p>{getFullPokedexNumber(pokemonIDX)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
