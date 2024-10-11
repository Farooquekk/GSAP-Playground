
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
    // console.log(dets.x+","+dets.y);
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease:"back.out"
    })
})
