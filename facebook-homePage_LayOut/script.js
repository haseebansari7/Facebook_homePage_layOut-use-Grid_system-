// let searchBar = document.getElementById("searchBar");
let inputField = document.querySelector('input')
function searchBarBtn() {
    console.log("!")
    if (inputField.style.width === "4.4rem") {
        inputField.style.width = "14rem"
    }
    else {
        inputField.style.width = "4.4rem"
    }
}
function navBtn() {
    console.log("!")
    var menu = document.getElementById("menu");
    if (menu.style.display == "block") {
        menu.style.display = "none"
    }
    // else if (menu.style.display == "none") {
    else {
        menu.style.display = "block"
    }
}