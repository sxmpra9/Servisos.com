/* sxmpra */
function toggleMenu() {
    const body = document.body;
    const menuIcon = document.querySelector(".menu-icon");
    const bars = document.querySelectorAll(".bar");
    const closeIcon = document.querySelector(".close");

    body.classList.toggle("menu-open");
    if (body.classList.contains("menu-open")) {
        bars.forEach(bar => bar.style.display = "none");
        closeIcon.style.display = "block";
    } else {
        bars.forEach(bar => bar.style.display = "block");
        closeIcon.style.display = "none";
    }
}
function goBack() {
    window.history.back();
}