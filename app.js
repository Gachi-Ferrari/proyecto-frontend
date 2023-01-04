const $contenedor = document.getElementById("contenedor");

const URL_API="https://rickandmortyapi.com/api/character";

fetch(URL_API)
.then((response) => response.json())
.then((data) => {
    const personajes = data.results;


for(let character of personajes){
    $contenedor.innerHTML +=`
    <div class="cajon"> <img class="img-personaje" src="${character.image}" alt="imagen de ${character.name}">
    <h2 class="nombre">Nombre: ${character.name}</h2>
    <h3 class="especie">Especie: ${character.species}</h3>
    <h3 class="estado">Estado: ${character.status}</h3>
    </div>
    `;
}
});