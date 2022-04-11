


// 
const duration = 1;
const tl = gsap.timeline({
    loop:true,
    yoyo:true,
    scrollTrigger: {
      trigger: "#about",
      start: "+=50",
      end: "bottom",
    snap: 1,
      // scrub: true,
      // pin: ".pin-it",
      // markers: true,
      id: "about-container"
    }
  });
  tl.from("#lapi-code-screen", {x:-40, y:-50,  z:-20,autoAlpha:0, transformOrigin:"0% 0%", duration})

  tl.from("#code-shadow", { scale:0, transformOrigin:'center', duration}, .1);

  tl.from("#coffee-square", { scale:0, transformOrigin:'center', duration: duration}, .3);
  tl.from("#coffee-shadow", { transformOrigin:'center', scale:0, duration: duration},.3);
  tl.from("#cofee-glass", {y: 350, scale:0, transformOrigin:'center', duration: duration}, .3);


   tl.from("#lapi-square", { transformOrigin:'center', y: -10, autoAlpha:0, scale:0, duration: duration}, .3);
    tl.from("#lapi-shadow", { transformOrigin:'center', y: 0, autoAlpha:0,  scale:0, duration: duration}, .1);

tl.from("#lapi-group", {y: -200, duration: duration, autoAlpha:0}, .3);

tl.from("#Group_12344 path", {duration: duration, transformOrigin:"left"},.1);
tl.from("#colored-line path", {duration: duration, transformOrigin:"left"}, .1);


tl.from("#squre-2, #squre-3, #squre-4, #Group_12351, #Group_12352, #Ellipse_202, #Ellipse_196-2, #Group_12353", {scale:0, transformOrigin:'center', duration: 1},.5);
