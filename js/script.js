{
    const welcome = () => {
        console.log("Witam developerów!");
    };
    welcome();

    const changeTheme = () => {
        const body = document.querySelector("body");
        const navigation = document.querySelector(".navigation");
        const table__caption = document.querySelector(".table__caption");
        const footer = document.querySelector(".footer");
        body.classList.toggle("body--darkTheme");
        navigation.classList.toggle("navigation--darkTheme");
        table__caption.classList.toggle("table__caption--darkTheme");
        footer.classList.toggle("footer--darkTheme");
        changeTheme.innerText = changeTheme.innerText === "Ciemny motyw" ? "Jasny motyw" : "Ciemny motyw";
    };

    const changeImage = () => {
        const imageCar1 = document.querySelector(".js-section__imageCar1");
        const imageCar2 = document.querySelector(".js-section__imageCar2");
        imageCar1.classList.toggle("hidden");
        imageCar2.classList.toggle("hidden");
    };

    const init = () => {
        const changeThemeButton = document.querySelector(".js-changeTheme");
        changeThemeButton.addEventListener("click", changeTheme);

        const changeImageButton = document.querySelector(".js-changeImage");
        changeImageButton.addEventListener("click", changeImage);
    };

init();   

};