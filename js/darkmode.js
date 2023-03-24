let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");


const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkmode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkmode", "null");
};

if (darkMode === "enabled") {
    enableDarkMode();
};


darkModeToggle.addEventListener("click",() => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});