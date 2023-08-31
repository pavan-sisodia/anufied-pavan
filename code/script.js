// const tl = gsap.timeline({paused: true});
// tl.from("#profile", {scale: 0.7, autoAlpha: 0});


// const startY = innerHeight / 10;
// const finishDistance = innerHeight / 5;
// function animateAtScrollPos() {
//   tl.progress((scrollY - startY) / finishDistance);
// }
// document.addEventListener("scroll", animateAtScrollPos);
gsap.from("#profile",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60
})
gsap.from("h1",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60
})
gsap.from("#intro",{
    scale:1.1,
    opacity:0,
    duration:1,
    // x:60
})