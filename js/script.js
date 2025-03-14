document.addEventListener("DOMContentLoaded", function () {
    let carousel = new bootstrap.Carousel(document.querySelector("#home"), {
        interval: 200,
        ride: "carousel",
        pause: false,
        wrap: true
    });
});
