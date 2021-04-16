document.addEventListener("DOMContentLoaded", () => {
    updatedText()
})

const updatedText = () => {
    document.getElementById("text").textContent = "This is really cool!";
}