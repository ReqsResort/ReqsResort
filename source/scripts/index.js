window.addEventListener("click", (event) => {
    switch (event.target) {
        case domElements.searchModal:
            domElements.searchModal.style.display = "none";
            break;
        case domElements.menuModal:
            domElements.menuModal.style.display = "none";
            break;
    }
});

domElements.headerButtonSearch.addEventListener("click", () => {
    domElements.searchModal.style.display = "block";
});

domElements.searchModalButtonSearch.addEventListener("click", () => {
    domElements.searchModalSearchBar.focus();
});

domElements.searchModalButtonCancel.addEventListener("click", () => {
    domElements.searchModal.style.display = "none";
});

domElements.headerButtonMenu.addEventListener("click", () => {
    domElements.menuModal.style.display = "block";
});

domElements.menuModalButtonCancel.addEventListener("click", () => {
    domElements.menuModal.style.display = "none";
});

const changeTheme = () => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.getElementById("root").classList.add("dark");
    } else document.getElementById("root").classList.remove("dark");
}

const changeThemeIcon = (theme) => {
    switch (theme) {
        case "light":
            domElements.menuModalSelectThemeIconLight.style.display = "block";
            domElements.menuModalSelectThemeIconDark.style.display = "none";
            break;
        case "dark":
            domElements.menuModalSelectThemeIconLight.style.display = "none";
            domElements.menuModalSelectThemeIconDark.style.display = "block";
            break;
    }
}

const changeThemeButton = () => {
    switch (domElements.menuModalSelectTheme.value) {
        case "light":
            localStorage.theme = "light";
            changeThemeIcon("light");
            break;
        case "dark":
            localStorage.theme = "dark";
            changeThemeIcon("dark");
            break;
        case "system":
            localStorage.removeItem('theme');
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) changeThemeIcon("dark");
            else changeThemeIcon("light");
    }
}

domElements.menuModalSelectTheme.addEventListener("change", () => {
    changeThemeButton();
    changeTheme();
});