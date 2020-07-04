let sliderArray, productsContainer;
let sliderPosition;
let sliderElement;
let interval;


function setup() {
    sliderArray = ["test1.jpg", "flauschis.jpg", "test2.jpg"];
    productsArray = [{
            "file": "product1.jpg",
            "categories": ["toys"]
        },
        {
            "file": "product2.jpg",
            "categories": ["toys"]
        },
        {
            "file": "product3.jpg",
            "categories": ["toys"]
        },
        {
            "file": "product4.jpg",
            "categories": ["toys"]
        },
        {
            "file": "product5.jpg",
            "categories": ["toys"]
        },
        {
            "file": "product6.jpg",
            "categories": ["snacks"]
        },
        {
            "file": "wetfood1.jpg",
            "categories": ["wetfood"]
        }
    ]

    sliderPosition = 1;
    sliderElement = document.getElementById("slider-element");
    productsContainer = document.getElementById("products-container");

    loadProducts("toys");

    interval = window.setInterval(function() {
        changeSlideLoop(1);
    }, 3000);
}

function stopSlider() {
    clearInterval(interval);
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

function changeSlideLoop(direction) {

    if (sliderPosition + direction < 0) {
        sliderPosition = sliderArray.length - 1;
    } else if (sliderPosition + direction >= sliderArray.length) {
        sliderPosition = 0;
    } else {
        sliderPosition += direction;
    }
    sliderElement.style.background = "url(" + sliderArray[sliderPosition] + ") no-repeat center center";
    sliderElement.style.height = "50vh";
    sliderElement.style.backgroundSize = "cover";
    sliderElement.style.flexGrow = "8";
    sliderElement.style.backgroundPositionY = "85%";

}

function loadProducts(category) {

    while (productsContainer.lastElementChild) {
        productsContainer.removeChild(productsContainer.lastElementChild);
    }

    productsArray
        .filter(element => element.categories == category)
        .map(element => {
            let newProduct = document.createElement("div");
            newProduct.classList.add("product-item");

            newProduct.style.background = "url(" + element.file + ")";
            newProduct.style.backgroundSize = "cover";

            productsContainer.appendChild(newProduct);
        })

}