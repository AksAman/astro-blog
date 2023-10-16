const initTheme = () => {

    const theme = (() => {
        if (typeof localStorage !== "undefined") {
            const theme = localStorage.getItem("theme")
            if (theme) {
                return theme;
            }
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    })();

    if (theme === "light") {
        document.documentElement.classList.remove("dark");
    } else {
        document.documentElement.classList.add("dark");
    }

    window.localStorage.setItem("theme", theme);

    const handleToggleClick = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");

        const isDark = element.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    const toggleButton = document.getElementById("theme-toggle");
    if (!toggleButton) {
        console.error("No theme toggle button found");
    } else {
        toggleButton.addEventListener("click", handleToggleClick);
    }
}

/*
astro:after-swap
    the new page is visible
astro:page-load
*/
document.addEventListener('astro:after-swap', () => {
    localStorage.theme === 'dark'
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.add("light");
});
document.addEventListener('astro:page-load', initTheme);
