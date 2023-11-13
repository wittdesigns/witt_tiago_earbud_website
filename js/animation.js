(() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1050;
    const frameCount = 301;
    const images = [];
    const buds = {
        frame: 0
    };
    let imagesLoaded = 0;

    function checkImagesLoaded() {
        imagesLoaded++;
        if (imagesLoaded === frameCount) {
            initAnimation();
        }
    }

    function initAnimation() {
        gsap.to(buds, {
            frame: 300,
            snap: "frame",
            scrollTrigger: {
                trigger: "#explode-view",
                pin: true,
                scrub: 0.5,
                markers: false,
                start: "top top",
                end: "+=100%",
            },
            onUpdate: render
        });
    }

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (images[buds.frame]) {
            context.drawImage(images[buds.frame], 0, 0);
        }
    }

    function preloadImages() {
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.onload = checkImagesLoaded;
            img.src = `images/anim/earbud_animation${(i + 1).toString().padStart(4, '0')}.png`;
            images.push(img);
        }
    }

    const staticImage = new Image();
    staticImage.onload = () => {
        context.drawImage(staticImage, 0, 0);
        preloadImages();
    };
    staticImage.src = "images/anim/earbud_animation0001.png";
})();
