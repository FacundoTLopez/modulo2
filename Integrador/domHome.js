const cardContainer = document.querySelector("#second-subsection");

document.addEventListener("DOMContentLoaded", () => {
  CardsDatabase.cards.map((p) => {
    p.map((p) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardImage = document.createElement("div");
      cardImage.classList.add("card-image");
      const coverImage = document.createElement("img");
      coverImage.classList.add("cover-image");
      coverImage.setAttribute("src", `${p.img}`);
      cardImage.appendChild(coverImage);

      const cardName = document.createElement("div");
      cardName.classList.add("card-name");
      const name = document.createElement("h3");
      const nameText = document.createTextNode(`${p.name}`);
      name.appendChild(nameText);
      cardName.appendChild(name);

      const cardDlc = document.createElement("div");
      cardDlc.classList.add("card-dlc");
      const cardDlcUl = document.createElement("ul");
      p.dlc.map((dlc) => {
        const li = document.createElement("li");
        const liText = document.createTextNode(`${dlc}`);
        li.appendChild(liText);
        cardDlcUl.appendChild(li);
      });
      cardDlc.appendChild(cardDlcUl);

      const linkDiv = document.createElement("div");
      linkDiv.classList.add("card-compra");
      const link = document.createElement("a");
      link.setAttribute("href", `${p.link}`);
      link.setAttribute("target", "_blank");
      const linkText = document.createTextNode("Mas info Aqui");
      link.appendChild(linkText);
      linkDiv.appendChild(link);

      card.appendChild(cardImage);
      card.appendChild(cardName);
      card.appendChild(cardDlc);
      card.appendChild(linkDiv);
      cardContainer.appendChild(card);
    });
  });
});

const Radio = document.querySelectorAll('input[name="dlc-or-not"]');
const Button = document.querySelector("#game-add-button");

/** check radio value
 *   
  let radioValue;
  for (const radioButton of Radio) {
    if (radioButton.checked) {
      radioValue = radioButton.value;
      console.log(radioValue);
      break;
    }
  }
    if(radioValue === "true"){
      console.log("A")
    }
 */

