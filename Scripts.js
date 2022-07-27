
    let pokemonRepository = (function(){

        let pokemonList = [
            {name:'Bulbasaur', type: 'Grass', height:'2'},
            {name:'Charmander', type:'Fire',height:'2'},
            {name:'Squirtle', type:'Water', height:'1'},
            {name:'Snorlax', type:'Normal', height:'9'}
        ];
        return{
            add: function(pokemon){
                pokemonList.push(pokemon);
            },
            getAll: function(){
                return pokemonList;
            }
        };
    })();

    console.log(pokemonRepository.getAll());
    pokemonRepository.add({name:'pikachu'});
    console.log(pokemonRepository.getAll());
   