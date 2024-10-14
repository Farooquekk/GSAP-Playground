
function breakTheText() {

    var h1 = document.querySelector("h1");
    var h1Text = document.querySelector("h1").textContent;

    var splittedText = h1Text.split("");
    var clutter = "";

    splittedText.forEach(function (e) {
        clutter += `<span>${e}</span>`;
    
    })
     console.log(clutter);

    h1.innerHTML = clutter;


}
breakTheText();
gsap.from("h1 span", {
    opacity:0,
    y: 50,
    duration: 0.8,
    delay: 0.5,
    stagger:0.15, // Value agr -ve ho to left to right chale
})


