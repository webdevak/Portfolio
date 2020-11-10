
    window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const title = document.querySelector('.title');
const lead = document.querySelector('.lead');
const project = document.getElementById('projects');


const fade = () => {
  setTimeout(() => {
    lead.classList.toggle('fade_out');
}, .5);

setTimeout(() => {
      title.classList.remove('slide_before');
      title.classList.add('slide_after');
}, .1);

setTimeout(() => {
    project.classList.toggle('.flip')
}, .3);

}

lead.addEventListener('load', fade());



