let elMenuInner = document.querySelector(".menu-inner");
let elMenuBtn = document.querySelector(".menu__btn");
let elInnerItem1 = document.querySelector(".inner__item:nth-child(1)");
let elInnerItem2 = document.querySelector(".inner__item:nth-child(2)");
let elInnerItem3 = document.querySelector(".inner__item:nth-child(3)");
let elInnerItem4 = document.querySelector(".inner__item:nth-child(4)");
let elInnerItem5 = document.querySelector(".inner__item:nth-child(5)");
let elInnerItem6 = document.querySelector(".inner__item:nth-child(6)");

elMenuBtn.addEventListener("click", function(){
    elMenuInner.classList.toggle("show-menu");
    elInnerItem1.classList.toggle("inner__item-block");
    elInnerItem2.classList.toggle("inner__item-block");
    elInnerItem3.classList.toggle("inner__item-block");
    elInnerItem4.classList.toggle("inner__item-block");
    elInnerItem5.classList.toggle("inner__item-block");
    elInnerItem6.classList.toggle("inner__item-block");
});