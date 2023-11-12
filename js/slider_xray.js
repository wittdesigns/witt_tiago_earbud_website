(() => {
    //variables
    let imageCon = document.querySelector('#imageCon'), 
        drag = document.querySelector('.image-drag, .image-drag-line'),
        left = document.querySelector('.image-left'),
        right = document.querySelector(".image-right"),
        xrayRevSection = document.querySelector('#xrayrev'),
        dragging = false,
        min = 0,
        max; // Declare max without assigning a value

    //Functions
    function onDown() {
        dragging = true;
        console.log("on Down Called");
    }

    function onUp() {
        dragging = false;
        console.log("on Up Called");
    }

    function onMove(event) {
        if (dragging === true) {
            let x = event.clientX - imageCon.getBoundingClientRect().left;
            if (x < min) {
                x = min;
            } else if (x > max) {
                x = max - 10;
            }

            drag.style.left = x + 'px';
            left.style.width = x + 'px';
        }

        imageCon.style.width = max - min + 'px';
    }

    function onStopDragging() {
        dragging = false;
    }


    imageCon.onload = function () {
        max = imageCon.offsetWidth;
    };

    //Event Listeners
    drag.addEventListener('mousedown', onDown);
    document.body.addEventListener('mouseup', onUp);
    document.body.addEventListener('mousemove', onMove);
    xrayRevSection.addEventListener('mouseleave', onStopDragging);
})();
