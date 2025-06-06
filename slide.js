document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/DSC00475.webp",
        "images/DSC00482.webp",
        "images/DSC00488.webp",
        "images/DSC00497.webp",
        "images/DSC00473.webp"
    ];

    const bg1 = document.getElementById("bg1");
    const bg2 = document.getElementById("bg2");

    let index = 1;
    let showingBg1 = true;

    //Предзагрузка всех изображений
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    // Начальный фон
    bg1.style.backgroundImage = `url('${images[0]}')`;

    // Слайдшоу
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
    }, 6000);
});
