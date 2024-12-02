async function getPoke(){
    try {
        const pokemonName = document.getElementById("name").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok){
            throw new Error("Could not find source.");
        }
        const data = await response.json();
        console.log(data);

        const pokemonSprite = data.sprites.front_default;
        const image = document.getElementById("pokemonSprite");
        image.src = pokemonSprite;
        image.style.display = "block";

        const height = data.height / 10;
        const weight = data.weight /10; 

        const abilities = data.abilities.map((ability) => ability.ability.name);

        const experience = data.base_experience;

        const heldItems = data.held_items.map((item) => item.item.name);

        const topMoves = data.moves.map((move) => move.move.name); 

        const pokeInfo = document.getElementById("pokeInfo");
        document.getElementById("height").innerText = `Height: ${height} m`;
        document.getElementById("weight").innerText = `Weight: ${weight} kg`;
        document.getElementById("abilities").innerText = `Abilities: ${abilities[0] + ", " + abilities[1]}`;
        document.getElementById("experience").innerText = `Base Experience: ${experience}`

        if(heldItems.length == 0){
            document.getElementById("heldItems").innerText = `Held Items: None`
        } else {
            document.getElementById("heldItems").innerText = `Held Items: ${heldItems}`
        }

        document.getElementById("topMoves").innerText = `Three Basic Moves: ${topMoves[0] + ", " + topMoves[1] + ", " + topMoves[2]}`
        pokeInfo.style.display = "block";
    }
    catch(error) {
        console.log(error);
    }
}