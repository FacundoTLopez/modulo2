const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokeInput = document.getElementById("search-input");
const pokeButton = document.getElementById("submit-button");
const pokeForm = document.getElementById("poke-form");
const pokeCard = document.getElementById("card");

pokeForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  pokeCard.innerHTML = "";
  const div1 = document.createElement("div1");
  div1.setAttribute("id", "div1");
  pokeCard.appendChild(div1);
  const div2 = document.createElement("div2");
  div2.setAttribute("id", "div2");
  pokeCard.appendChild(div2);
  const div3 = document.createElement("div3");
  div3.setAttribute("id", "div3");
  pokeCard.appendChild(div3);
  const div4 = document.createElement("div4");
  div4.setAttribute("id", "div4");
  pokeCard.appendChild(div4);
  const div5 = document.createElement("div5");
  div5.setAttribute("id", "div5");
  pokeCard.appendChild(div5);

  const getPokemon = await fetch(`${pokeUrl}${pokeInput.value}`).then((res) =>
    res.json()
  );
  const { abilities, forms, name, sprites, stats } = getPokemon;
  const { front_default: image } = sprites;

  const pokemonName = document.createElement("h2");
  const pokemonNameText = document.createTextNode(name);
  pokemonName.appendChild(pokemonNameText);

  const pokeImage = document.createElement("img");
  pokeImage.setAttribute("src", `${image}`);
  pokeImage.classList.add("poke-img");

  const pokemonStatsUl = document.createElement("ul");
  stats.map((item) => {
    const li = document.createElement("li");
    const liText = document.createTextNode(
      `${item.stat.name} ${item.base_stat}`
    );
    li.appendChild(liText);
    pokemonStatsUl.appendChild(li);
  });

  const pokemonFormsUl = document.createElement("ul");
  forms.map((item) => {
    const li = document.createElement("li");
    const liText = document.createTextNode(`${item.name}`);
    li.appendChild(liText);
    pokemonFormsUl.appendChild(li);
  });

  const abilitiesUl = document.createElement("ul");
  abilities.map((item) => {
    const li = document.createElement("li");
    const liText = document.createTextNode(`${item.ability.name}`);
    li.appendChild(liText);
    abilitiesUl.appendChild(li);
  });

  div1.appendChild(pokeImage);
  div2.appendChild(pokemonName);
  div3.appendChild(pokemonStatsUl);
  div4.appendChild(abilitiesUl);
  div5.appendChild(pokemonFormsUl);
});
