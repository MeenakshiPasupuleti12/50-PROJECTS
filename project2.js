document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements
    const progress = document.getElementById("progress");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const circles = document.querySelectorAll(".circle");

    let currentActive = 1;

    // Event listener for "Next" button
    next.addEventListener("click", () => {
        currentActive++;

        if (currentActive > circles.length) {
            currentActive = circles.length;
        }

        update();
    });

    // Event listener for "Prev" button
    prev.addEventListener("click", () => {
        currentActive--;

        if (currentActive < 1) {
            currentActive = 1;
        }

        update();
    });

    // Function to update progress bar and circles
    function update() {
        circles.forEach((circle, idx) => {
            if (idx < currentActive) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });

        // Update progress bar width
        const progressWidth = ((currentActive - 1) / (circles.length - 1)) * 100;
        progress.style.width = progressWidth + "%";

        // Disable "Prev" at first step
        prev.disabled = currentActive === 1;

        // Disable "Next" at last step
        next.disabled = currentActive === circles.length;
    }
});
