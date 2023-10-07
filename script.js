const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
function openModal() {
    console.log("Hey");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}
function closeModal(){
    console.log("closed")
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}