
   // Global Variables
const title = document.querySelector('.title');
const lead = document.querySelector('.lead');
const project = document.getElementById('projects');

   
   // Event listener for scroll events for Skills section
   window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const sr = ScrollReveal();

sr.reveal('div', {
  origin: 'top',
  distance: '50px',
  scale: 1,
  duration: 2000
});


// Fade Arrow function
const fade = () => {
  setTimeout(() => {
    lead.classList.toggle('fade_out'); // Toggles the fade out class so the text comes in onload in .5s
}, .5);

setTimeout(() => {
      title.classList.remove('slide_before'); // removes slide_before class and adds slide after in .1s for title to show
      title.classList.add('slide_after');
}, .1);

setTimeout(() => {
  project.classList.add('flip_after') // Flips the project title 10sec after the page loads
}, 10000)

}

lead.addEventListener('load', fade());




 