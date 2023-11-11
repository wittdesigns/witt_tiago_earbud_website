(() => {

const canvas = document.querySelector("#explode-view");

const  context = canvas.getContext("2d");


canvas.width = 1920;
canvas.height = 1080;


const frameCount = 450; //how many still frames we do have



const images = []; //array to hold all of the images

//object literal, that has a property of frame to hold the current frame
const buds = {
    frame:0
}

//run a for loop to populate our images array
for(let i=0; i<frameCount; i++){ //++ means incrament by one
    // console.log(i);
    const img = new Image();
    //images/explode_0013.webp
    img.src = `images/anim/earbud_animation${(i+1).toString().padStart(4, '0')}.png`;
    images.push(img);

}

// console.log(images);
// console.table(images);


//we are not actually animating a DOM element, but rather than object
//which contains a frame count, as the user scrolls we increase the value by 1
//We tell GreenSock there is a total of 449 frames to cycle through , so it know when to stop. GreenSock scrolling uses decimals, so 
gsap.to(buds, {
    frame:449,
    snap: "frame",
    scrollTrigger: {
        trigger: "#explode-view",
        pin: true, //it pins the screen untill the animation is done
        scrub: 1,
        markers: true,
        start: "top top"

    },
    onUpdate: render


})

images[0].addEventListener("onload", render);

function render() {
    // console.log(buds.frame);
    // console.log(images[buds.frame]);
    context.clearRect(0,0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame],0,0)
}





})();