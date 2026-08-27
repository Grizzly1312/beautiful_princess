// Fade each gallery card in as it scrolls into view
const cards = document.querySelectorAll('.card');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(c => io.observe(c));
