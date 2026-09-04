```javascript
// ================================
// Hero Image Slider
// ================================

const hero = document.querySelector(".hero");

const images = [

    "images/hero/hero1.jpg",

    "images/hero/hero2.jpg",

    "images/hero/hero3.jpg",

    "images/hero/hero4.jpg"

];

let current = 0;

function changeBackground(){

    hero.style.background =
    `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
    url('${images[current]}') center/cover no-repeat`;

    current++;

    if(current >= images.length){

        current = 0;

    }

}

changeBackground();

setInterval(changeBackground,5000);
```
