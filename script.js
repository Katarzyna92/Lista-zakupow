//usunięcie elementu z listy
function remove(e) {
    //target - element, który klikneliśmy; parentNode - usunięcie rodzica buttona czyli li
    e.target.parentNode.remove();
    //lub przekreślenie
    // e.target.parentNode.style.textDecoration="line-through";
}

document.querySelectorAll("li button").forEach(item => item.addEventListener("click", remove))

//dodanie elementu do listy
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const list = document.querySelectorAll("li");
const input = document.querySelector("input");

function add(e) {
    //wyłączenie przeładowywania strony po kliknięciu submit
    e.preventDefault();
    const nazwaProduktu = input.value;
    if (nazwaProduktu === " ") return;

    //dodanie produktu
    const produkt = document.createElement("li");
    produkt.innerHTML = nazwaProduktu + "<button>Usuń</button>";
    ul.appendChild(produkt);

    //wyczyszczenie pola
    input.value = " ";

    //usunięcie produktu po kliknięciu usuń
    produkt.querySelector("button").addEventListener("click", remove)
}

form.addEventListener("submit", add)