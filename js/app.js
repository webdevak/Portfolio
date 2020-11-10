
    window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const title = document.querySelector('.title');
const lead = document.querySelector('.lead');


const fade = () => {
  setTimeout(() => {
    lead.classList.toggle('fade_out');
}, 1000);

setTimeout(() => {
      title.classList.remove('slide_before');
      title.classList.add('slide_after');
}, 1000);

}

lead.addEventListener('load', fade());



