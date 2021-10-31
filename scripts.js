function SendME(element) {
    if (element.classList.contains("selected-skill")) {
        element.classList.remove("selected-skill");
    } else {
        element.classList.add("selected-skill");
    }
}