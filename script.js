const track = document.querySelector(".projects-track");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

if (track && prevButton && nextButton) {
    const scrollAmount = 350;

    nextButton.addEventListener("click", () => {
        track.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    prevButton.addEventListener("click", () => {
        track.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    // Arrastar com o mouse
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    track.addEventListener("mousedown", (event) => {
        isDragging = true;
        startX = event.pageX;
        scrollStart = track.scrollLeft;
        track.classList.add("dragging");
    });

    track.addEventListener("mouseup", () => {
        isDragging = false;
        track.classList.remove("dragging");
    });

    track.addEventListener("mouseleave", () => {
        isDragging = false;
        track.classList.remove("dragging");
    });

    track.addEventListener("mousemove", (event) => {
        if (!isDragging) return;

        event.preventDefault();

        const distance = event.pageX - startX;

        track.scrollLeft = scrollStart - distance;
    });
}