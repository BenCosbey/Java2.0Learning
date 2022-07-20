var pokemonList = [
    {name:'Bulbasaur', type: 'Grass', height:'2'},
    {name:'Charmander', type:'Fire',height:'2'},
    {name:'Squirtle', type:'Water', height:'1'},
    {name:'Snorlax', type:'Normal', height:'9'}
];

for (let i=0; i<pokemonList.length; i++) {
    //writes special text for pokemons with a height over 1
    if (pokemonList[i].height>6) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow wow weee wow wow, its big!')
    } else {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>')
    }
}