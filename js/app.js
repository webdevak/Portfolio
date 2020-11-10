
    window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);




let tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

// tl.from("#projects", .5, {x:200, opacity:0});

const scene = new ScrollMagic.scene({
  triggerElement: ".projects",
  triggerHook: "onLeave",
  duration:"100%"
})

.setPin(".projects")
.setTween(tl)
.addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}