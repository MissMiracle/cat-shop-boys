let sliderArray;
let sliderPosition;
let sliderElement;


function setup() {
    sliderArray = ["test1.jpg", "flauschis.jpg", "test2.jpg"];
    sliderPosition = 1;
    sliderElement = document.getElementById("slider-element");
}

function changeSlide(direction) {

    if (sliderPosition + direction >= 0 && sliderPosition + direction < sliderArray.length) {
        sliderPosition += direction;
        console.log(sliderElement);

        console.log("url(" + sliderArray[sliderPosition] + ") no-repeat center center fixed");
        console.log(sliderElement.style.background);
        sliderElement.style.background = "url(" + sliderArray[sliderPosition] + ") no-repeat center center fixed";
        sliderElement.style.height = "50vh";
        sliderElement.style.backgroundSize = "cover";
        sliderElement.style.flexGrow = "8";
        sliderElement.style.backgroundPositionY = "120%";
        console.log(sliderElement.style.background);
    }
}