let product = document.querySelector(".products-box");
let servicec = document.querySelector(".servicec-container");
let product2 = document.querySelector(".products-box2");
window.onscroll = function f() {
    if (document.documentElement.scrollTop > 150) {
        product.classList.add("active")
    }if (document.documentElement.scrollTop > 650) {
        servicec.classList.add("active2")
    }if (document.documentElement.scrollTop > 1550){
        product2.classList.add("active3")
    }
};
