const svg = document.querySelectorAll("#textsvg path");

for (let i = 0; i < svg.length; i++){
    console.log(`Letter ${i} is ${svg[i].getTotalLength()}`)
}