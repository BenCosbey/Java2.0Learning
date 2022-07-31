let pokemonRepository = (function () {
    let repository = [
      {
        name: "Bulbasaur",
        height: 0.7,
        types: ["grass", "poison"],
      },
      {
        name: "Charizard",
        height: 1.7,
        types: ["fire", "flying"],
      },
      {
        name: "Squirtle",
        height: 1,
        types: ["water"],
      },
    ];
  /*from 1.5 adding PKMN*/
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ) {
        repository.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return repository;
    }
/*creates button for each PKMN*/
    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
    }
    /*logs PKMN*/
     document.addEventListener('button', function (){
    console.log(pokemon);
  });
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();
  
  pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
  /*below shows all the PKMN in step 2B*/
  console.log(pokemonRepository.getAll());
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);

    
  });