const container = document.createElement("div");

document.addEventListener("DOMContentLoaded", async (e) => {
  const Vader = await fetch("https://swapi.dev/api/people/4");
  const VaderJSON = await Vader.json();
  const { name, gender, films } = VaderJSON;

  const CharacterName = document.createElement("h2");
  const CharacterNameText = document.createTextNode(name);
  CharacterName.appendChild(CharacterNameText);

  const CharacterGender = document.createElement("p");
  const CharacterGenderText = document.createTextNode(gender);
  CharacterGender.appendChild(CharacterGenderText);

  const movieList = document.createElement("ul");
  const movieListText = document.createTextNode("aparece en los episodios:");
  movieList.appendChild(movieListText);
  films.map(async (p) => {
    const movies = await fetch(p);
    const moviesJSON = await movies.json();

    const li = document.createElement("li");
    const liText = document.createTextNode(moviesJSON.title);
    li.appendChild(liText);
    movieList.appendChild(li);
  });

  container.appendChild(CharacterName);
  container.appendChild(CharacterGender);
  container.appendChild(movieList);

  document.body.appendChild(container);
});
