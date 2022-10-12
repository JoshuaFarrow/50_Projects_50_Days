const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

next.addEventListener("click", () => {
    currentStep++;

    if (currentStep > circles.length) {
        currentStep = circles.length;
    }

    UpdateDom();
});

prev.addEventListener("click", () => {
    currentStep--;

    if (currentStep < 1) {
        currentStep = 1;
    }

    UpdateDom();
});

function UpdateDom() {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
