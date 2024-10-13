// gsap.to("#box1", {
//     x: 1100,
//     rotate: 360,
//     delay: 1,
//     duration:1.5
    
// })
// gsap.to("#box2", {
//     x: 1100,
//     backgroundColor:"yellow",
//     rotate: 360,
//     delay: 2.5,
//     duration:1.5
    
// })
// gsap.to("#box3", {
//     x: 1100,
//     rotate: 360,
//     borderRadius:"50%",
//     delay: 4,
//     duration: 1.5,
//     scale:"0.5"
    
// })


//  Time Line

var tl = gsap.timeline();
// In time line things will run in async
tl.to("#box1", {
    x: 1100,
    rotate: 360,
    duration: 1.5,
    delay:1
})
tl.to("#box2", {
    x: 1100,
    rotate: 360,
    duration: 1.5,
    // delay:1 no need
})
