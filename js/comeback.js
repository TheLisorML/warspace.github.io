let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Возвращайся к нам :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})