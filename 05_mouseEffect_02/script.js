
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imgDiv = document.querySelector("#image");

main.addEventListener("mousemove",function(dets){
    // console.log(dets.x+","+dets.y);
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease:"back.out"
    })
})
imgDiv.addEventListener("mouseenter", function () {
   cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 4,
        backgroundColor:"#ffffff5c"
   })
})
imgDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = " "
    gsap.to(cursor, {
        scale: 1,
        backgroundColor:"#fff"
   })
})
