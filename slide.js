document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/DSC00475.JPG",
        "images/DSC00482.JPG",
        "images/DSC00488.JPG",
        "images/DSC00497.JPG",
        "images/DSC00473.JPG"
    ];

    const bg1 = document.getElementById("bg1");
    const bg2 = document.getElementById("bg2");

    let index = 1;
    let showingBg1 = true;

    // Initial background
    bg1.style.backgroundImage = `url('${images[0]}')`;

    setInterval(() => {
        const nextImage = images[index % images.length];
        if (showingBg1) {
            bg2.style.backgroundImage = `url('${nextImage}')`;
            bg2.style.opacity = 1;
            bg1.style.opacity = 0;
        } else {
            bg1.style.backgroundImage = `url('${nextImage}')`;
            bg1.style.opacity = 1;
            bg2.style.opacity = 0;
        }

        showingBg1 = !showingBg1;
        index++;
    }, 6000); // Change every 6 seconds
});
