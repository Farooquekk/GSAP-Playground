// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

// pin box-c when it reaches the center of the viewport, for 300px
ScrollTrigger.create({
  trigger: ".box-c",
  pin: true,
  start: "center center",
  end: "+=300",
  markers: true
});

document.querySelector("button").addEventListener("click", e => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  smoother.scrollTo(".box-c", true, "center center");
  
  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  //  scrollTop: smoother.offset(".box-c", "center center"),
  //  duration: 1
  // });
});
