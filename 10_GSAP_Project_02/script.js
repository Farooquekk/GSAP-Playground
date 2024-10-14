
function breakTheText() {

    var h1 = document.querySelector("h1");
    var h1Text = document.querySelector("h1").textContent;

    var splittedText = h1Text.split("");
    var halfValue = splittedText.length / 2;
    // console.log(halfValue);
    var clutter =""

    splittedText.forEach(function (e,idx) {
        if (idx < halfValue) {
            clutter+=`<span class = "a" >${e}</span>`
        }
            else {
             
                 clutter+=`<span class="b">${e}</span>`
            }
        
    h1.innerHTML = clutter
    
    })
     


}
breakTheText();
gsap.from("h1 .a", {
    opacity:0,
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger:0.15, // Value agr -ve ho to left to right chale
})

gsap.from("h1 .b", {
    opacity:0,
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger:-0.15, 
})


