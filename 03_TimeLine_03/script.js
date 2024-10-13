var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i")
var tl = gsap.timeline();
tl.to("#full", {
    right: 0,
    duration: 0.5,
})
tl.from("#full h4", {
    x: 150,
    duration: 0.6,
    stagger: 0.2, // run one by one
    opacity: 0
});

tl.from("#full i", {
    opacity:0
})
tl.pause();
menu.addEventListener("click", function(){
    // console.log("Hello");
    tl.play();
    
})

cross.addEventListener("click", function () {
    tl.reverse();
})
