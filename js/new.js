let scroll_tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.factsContainer',
        start: "top center",
        // pin: true,
        scrub: true,
        end: "+=300",
        // markers: true,
        id: "main-container"
    }
}),
    facts = [...document.querySelectorAll('.fact')]
scroll_tl.to('.factsContainer h2', {
    scale: 1.5,
    duration: 1,
    ease: "slow"
});
 
scroll_tl.to('.factsContainer', {
    background: 'black',
    duration: 3,
});

scroll_tl.to(facts, {
    xPercent: -85 * (facts.length - 1),
    scrollTrigger: {
        trigger: ".factsContainer_sm",
        start: "center center",
        pin: true,
        // horizontal: true,
        // pinSpacing:false,
        // markers: true,
        scrub: 1,
        snap: 1 / (facts.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: () => `+=${smallFactsContainer.offsetWidth}`
        end: () => `+=4320`
    }
});





// 
const duration = 2;
const tl = gsap.timeline({
    loop:true,
    yoyo:true,
    scrollTrigger: {
      trigger: "#about",
      start: "top",
    end: "bottom top",
    snap: 1 / (facts.length - 1),
      scrub: true,
      pin: "#about",
    //   markers: true,
      id: "about-container"
    }
  });
  tl.from("#lapi-code-screen", {x:-40, y:-50,  z:-20,autoAlpha:0, transformOrigin:"0% 0%", duration})

  tl.from("#code-shadow", { scale:0, transformOrigin:'center', duration}, .1);

tl.from("#coffee-square", { scale:0, transformOrigin:'center', duration: duration}, .3);
tl.from("#coffee-shadow", { transformOrigin:'center', scale:0, duration: duration},.3);
tl.from("#cofee-glass", {y: 350, scale:0, transformOrigin:'center', duration: duration}, .3);


tl.from("#lapi-square", { transformOrigin:'center', y: 0, autoAlpha:0, scale:0, duration: duration}, .3);
tl.from("#lapi-shadow", { transformOrigin:'center', y: 0, autoAlpha:0,  scale:0, duration: duration}, .1);

tl.from("#lapi-group", {y: -200, duration: duration, autoAlpha:0}, .3);

tl.from("#Group_12344 path", {duration: duration, transformOrigin:"left"},.1);
tl.from("#colored-line path", {duration: duration, transformOrigin:"left"}, .1);


tl.from("#squre-2, #squre-3, #squre-4, #Group_12351, #Group_12352, #Ellipse_202, #Ellipse_196-2, #Group_12353", {scale:0, transformOrigin:'center', duration: 1},.5);

document.querySelector("#restart").onclick = () => tl.restart();



