// Function to handle the initial page load animation




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



gsap.registerPlugin(ScrollTrigger);

function pageOneAnimation() {
    var tl = gsap.timeline();
    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        opacity: 0,
        delay: 0.7,
        duration: 1,
        stagger: 0.15
    });

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.5
    });

    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4
    });

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    });

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=0.3");

    tl.from(".section1bottom", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6
    });
}
pageOneAnimation();



//gsap.registerPlugin(ScrollTrigger);

// Scroll-triggered animation


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
})

tl2.from(".services", {
    x: 30,
    opacity: 0,
    duration: 0.5
});

tl2.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration: 1
}, "anime");

tl2.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration: 1
}, "anime");

tl2.from(".elem.line2.left", {
    x: -300,
    opacity: 0,
    duration: 1
}, "ani");

tl2.from(".elem.line2.right", {
    x: 300,
    opacity: 0,
    duration: 1
}, "ani");
