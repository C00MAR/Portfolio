/* ===== Scroll Manager ===== */

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; console.log(supportsPassive)} 
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// let startID
// disableScroll()
// function starttime() {
//     scrollTo(0, 0)
//     startID = setTimeout(enableScroll, 5000, '');
// }
// starttime()

/* ===== NAVIGATION TOGGLER ===== */

$(".picto").on("click", function(){
    $(".picto").toggleClass("close-btn");
    $(".nav ").toggleClass("open-menu");
    $("#textsvg").toggleClass("blur");
});

/* ===== DETAIL PROJECT TOGGLER ===== */

$(".Hometimisation-img").on("click", function(){
    $(".overview").addClass("detailproject");
    $(".pictoproject").addClass("close-btn-project")
    $(".pictoproject").addClass("close-project1")
    $(".line").addClass("hide")
    disableScroll()
    scrollTo(0, 721)
});

$(".InMessage-img").on("click", function(){
    $(".overview").addClass("detailproject");
    $(".pictoproject").addClass("close-btn-project")
    $(".pictoproject").addClass("close-project2")
    $(".line").addClass("hide")
    disableScroll()
    scrollTo(0, 1643)
});

$(".Nexus-img").on("click", function(){
    $(".overview").addClass("detailproject");
    $(".pictoproject").addClass("close-btn-project")
    $(".pictoproject").addClass("close-project3")
    $(".line").addClass("hide")
    disableScroll()
    scrollTo(0, 2565)
});

$(".pictoproject").on("click", function(){
    $(".overview").removeClass("detailproject");
    $(".pictoproject").removeClass("close-btn-project")
    $(".pictoproject").removeClass("close-project1")
    $(".pictoproject").removeClass("close-project2")
    $(".pictoproject").removeClass("close-project3")
    $(".line").removeClass("hide")
    enableScroll()
});

/* ===== ANIMATION SVG CONTROLER ===== */

var text = document.getElementById('textmarc');
var newDom = '';
var animationDelay = 75;
function Name() {
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['display'] = 'none';
        text.children[i].style['display'] = 'inline-block';
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
}
let timeoutID;
function delayed() {
    timeoutID = setTimeout(Name, 3500, '');
}
delayed()

/* ===== ANIMATION VISIT SITE CONTROLER ===== */

var textspan1 = document.getElementById('visithere_1');
var textspan2 = document.getElementById('visithere_2');
var textspan3 = document.getElementById('visithere_3');
var newTag1 = '';
var newTag2 = '';
var newTag3 = '';
function visithere() {
    for(let j = 0; j < textspan1.innerText.length; j++)
    {
        newTag1 += '<span class="letter">' + (textspan1.innerText[j] == ' ' ? '&nbsp;' : textspan1.innerText[j])+ '</span>';
        newTag2 += '<span class="letter">' + (textspan2.innerText[j] == ' ' ? '&nbsp;' : textspan2.innerText[j])+ '</span>';
        newTag3 += '<span class="letter">' + (textspan3.innerText[j] == ' ' ? '&nbsp;' : textspan3.innerText[j])+ '</span>';
    }
    textspan1.innerHTML = newTag1;
    textspan2.innerHTML = newTag2;
    textspan3.innerHTML = newTag3;
}
visithere()