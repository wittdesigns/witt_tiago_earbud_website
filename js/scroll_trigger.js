(() => {

console.clear();

const canvas = document.querySelector("#explode-view");


const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;


const frameCount = 300;



const currentFrame = index => (
  `images/anim/earbud_animation${(i+1).toString().padStart(4, '0')}.png`
);

const images = []

const buds = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}





gsap.to(buds, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: "#explode-view",
    scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;



function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[buds.frame], 0, 0); 
}




})();