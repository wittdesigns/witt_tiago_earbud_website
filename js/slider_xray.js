(() => {
    
//variables
let imageCon = document.querySelector('#imageCon'), 
    drag = document.querySelector('.image-drag, image-drag-line'),
    left = document.querySelector('.image-left')
    right = document.querySelector(".image-right"),
    xrayRevSection = document.querySelector('#xrayrev'),
    dragging = false,
    min = 0,
    max = imageCon.offsetWidth;


     //Functions
    function onDown(){
         dragging = true;
        console.log("on Down Called");
    }

    function onUp(){
        dragging = false;
        dragging = true; console.log("on Up called");
        console.log("on Up Called");
    }


    function onMove (event) {
        if(dragging===true) {
            let x = event.clientX - imageCon.getBoundingClientRect().left;
            if(x < min) {
                x = min;
            } else if(x > max){
                x = max-10;

            }



            drag.style.left = x + 'px';
            left.style.width = x + 'px';
        }

        imageCon.style.width = x + 'px';
    }

    function onStopDragging() {
        dragging = false;
    }

    //Event Listeners
    drag.addEventListener('mousedown', onDown);
    document.body.addEventListener('mouseup', onUp);
    document.body.addEventListener('mousemove', onMove);
    xrayRevSection.addEventListener('mouseleave', onStopDragging);
})();