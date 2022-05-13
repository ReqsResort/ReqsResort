// Modal controls

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

// Theme switcher controls

domElements.menuModalButtonTheme.addEventListener("click", () => {
    switch (domElements.menuModalThemeText.textContent) {
        case "light":
            localStorage.theme = 'dark';
            break;
        case "dark":
            localStorage.theme = 'light';
            break;
    }

    domElements.menuModalThemeText.textContent = localStorage.theme;
    changeTheme();
});

domElements.menuModalThemeText.textContent = localStorage.theme;