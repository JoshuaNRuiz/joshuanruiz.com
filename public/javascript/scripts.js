let devMouseover = () => {
    document.querySelector("#dev-circle span").innerText = "GITHUB";
}

let devMouseout = () => {
    document.querySelector("#dev-circle").style.backgroundImage = "url('../images/development.jpg')";
    document.querySelector("#dev-circle span").innerText = "DEVELOPMENT";
}