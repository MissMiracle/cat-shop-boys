let sliderArray, productsContainer;
let sliderPosition;
let sliderElement;


function setup() {
    sliderArray = ["test1.jpg", "flauschis.jpg", "test2.jpg"];
    productsArray = ["product1.jpg", "product2.jpg", "product3.jpg", "product4.jpg", "product5.jpg", "product6.jpg"];
    sliderPosition = 1;
    sliderElement = document.getElementById("slider-element");
    productsContainer = document.getElementById("products-container");

    loadProducts("toys");
}

function showSliderButton() {
    Array.prototype.map.call(document.getElementsByClassName("slider-button"), element => {
        element.style.visibility = "visible";
    })
}

function changeSlide(elem, direction) {
    console.log(elem);
    if (sliderPosition + direction >= 0 && sliderPosition + direction < sliderArray.length) {
        if (sliderPosition + direction == 0 || sliderPosition + direction == sliderArray.length - 1) {
            elem.style.visibility = "hidden";
        } else {
            showSliderButton();
        }
        sliderPosition += direction;
        sliderElement.style.background = "url(" + sliderArray[sliderPosition] + ") no-repeat center center fixed";
        sliderElement.style.height = "50vh";
        sliderElement.style.backgroundSize = "cover";
        sliderElement.style.flexGrow = "8";
        sliderElement.style.backgroundPositionY = "120%";
    }
}

function loadProducts(category) {
    productsArray.map(element => {
        let newProduct = document.createElement("div");
        newProduct.classList.add("product-item");

        newProduct.style.background = "url(" + element + ")";
        newProduct.style.backgroundSize = "cover";

        productsContainer.appendChild(newProduct);
    })

}