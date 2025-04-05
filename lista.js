function mostrarLista(listapokemon){
    document.getElementById("app")
    app.innerHTML= "Lista";
    let pokes = " ";
    for (let i = 0; i < listapokemon.length; i++){
        let id = listapokemon[i].url.split("/")[6];
        pokes += `
        <div class="c-lista-pokemon poke-${id}" onclick="mostrarDetalle('${listapokemon[i].name}')">
            <p>#${id}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${listapokemon[i].name}">
            <p>${listapokemon[i].name}</p>
        </div>`;
    }

    app.innerHTML = pokes; 
}