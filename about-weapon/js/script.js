
//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else {
        document.querySelector('body').classList.add('no-webp');
    }
});


const btnMenu = document.querySelector(".adaptive-menu__burger")
    , menu = document.querySelector(".adaptive-menu__list")
    , toggleMenu = function () {
        menu.classList.toggle("adaptive-menu__list--active")
    };

btnMenu.addEventListener("click", (function (t) {
    t.stopPropagation(),
        toggleMenu()
}
));

document.addEventListener("click", (function (t) {
    const e = t.target
        , n = e == menu || menu.contains(e)
        , a = e == btnMenu
        , o = menu.classList.contains("adaptive-menu__list--active");
    n || a || !o || toggleMenu()
}
));



// scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}