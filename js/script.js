console.log("Witam developerów!");

let changeImage = document.querySelector(".js-changeImage");
let body = document.querySelector("body");

let navigation = document.querySelector(".navigation");
let section__header = document.querySelector(".section__header");
let table__caption = document.querySelector(".table__caption");
let footer = document.querySelector(".footer");

let imageCar1 = document.querySelector(".js-section__imageCar1");
let imageCar2 = document.querySelector(".js-section__imageCar2");
let changeTheme = document.querySelector(".js-changeTheme");

changeTheme.addEventListener("click", () => {
    body.classList.toggle("body--darkTheme");
    navigation.classList.toggle("navigation--darkTheme");
    table__caption.classList.toggle("table__caption--darkTheme");
    footer.classList.toggle("footer--darkTheme");
    changeTheme.innerText = changeTheme.innerText === "Ciemny motyw" ? "Jasny motyw" : "Ciemny motyw";
});

changeImage.addEventListener("click", () => {
    imageCar1.classList.toggle("hidden");
    imageCar2.classList.toggle("hidden");
});