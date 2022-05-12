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

domElements.menuModalSelectTheme.addEventListener("change", (event) => {
    switch (event.target.value) {
        case "light":
            localStorage.theme = 'light';
            break;
        case "dark":
            localStorage.theme = 'dark';
            break;
        case "system":
            localStorage.removeItem('theme');
            break;
    }

    changeTheme();
});

if (!('theme' in localStorage)) domElements.menuModalSelectTheme.value = "system";
else domElements.menuModalSelectTheme.value = localStorage.theme;