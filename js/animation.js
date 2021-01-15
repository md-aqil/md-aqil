
gsap.set("#lapi-code-screen", {autoAlpha:0,});
gsap.set("#code-shadow", {autoAlpha:0,scale:0, transformOrigin:'center center'});

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-art-animation",
      start: "center center",
    end: "center top",
    //   scrub: true,
    //   pin: ".pin",
    //   markers: true
    }
  });
  
tl.from("#coffee-square", {scale:0, transformOrigin:'center', autoAlpha:0, duration: 1});
tl.from("#coffee-shadow", {scale:0, transformOrigin:'center', duration: 1});
tl.from("#cofee-glass", {y: -200, duration: 1, autoAlpha:0}, 1);


tl.from("#lapi-square", {scale:0, transformOrigin:'center', duration: 1}, .4);
tl.from("#lapi-shadow", {scale:0, transformOrigin:'center', duration: 1}, .6);

tl.from("#lapi-group", {y: -200, duration: 1, autoAlpha:0}, .9);
tl.to("#code-shadow", {autoAlpha:1, scale:1, transformOrigin:"center center",duration: 1}, .9);
tl.to("#lapi-code-screen", {x:-10, y:-10,z:-20,autoAlpha:1,  transformOrigin:"0% 0%"});
tl.from("#squre-2, #squre-3, #squre-4, #Group_12351, #Group_12352, #Ellipse_202, #Ellipse_196-2, #Group_12353", {scale:0, transformOrigin:'center', duration: 1},.5);




