const svg = document.querySelectorAll("#textsvg path");

for (let i = 0; i < svg.length; i++){
    console.log(`Letter ${i} is ${svg[i].getTotalLength()}`)
}

$(".picto").on("click", function(){
    $(".picto").toggleClass("close-btn");
    $(".nav ").toggleClass("open-menu");
    $("#textsvg").toggleClass("blur");
});