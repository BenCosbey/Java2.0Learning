
        let Pokemon = [
            {name:'Bulbasaur', type: 'Grass', height:'2'},
            {name:'Charmander', type:'Fire',height:'2'},
            {name:'Squirtle', type:'Water', height:'1'},
            {name:'Snorlax', type:'Normal', height:'9'}
        ];

        Pokemon.forEach((Pokemon)=> {
            document.write('${Pokemon.name}')
        });
