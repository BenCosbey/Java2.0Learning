// pokedex; consist of 150 original pkmn. Each pkmn has a list of attributes found in .js file
attributes listed
  found on line 54
      let nameElement = $('<h1>' + capitalize(item.name) + '</h1>');
      let heightElement = $('<div>' + '<p>' + 'Height: ' + item.height + '</p>' + '</div>');
      let typeElement = $('<div>' + '<p>' + 'Type(s): ' + item.types + '</p>' + '</div>');
      let abilitiesElement = $('<div>' + '<p>' + 'Abilities: ' + item.abilities + '</p>' + '</div>');
      let imageElement = $('<img class="modal-img">');
      
      each attribute uses modals found on line 39
      
      API is used found on line 6 listed below
      let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
      
      Main take away is how to use an API and display the information in another window through java instead of using HTML and CSS only.
