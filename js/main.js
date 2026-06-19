// ===== BACK TO TOP =====
const btnTop = document.getElementById('backToTop');
if (btnTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTop.classList.add('vizibil');
    } else {
      btnTop.classList.remove('vizibil');
    }
  });
  btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== SLIDER TESTIMONIALE =====
const testimoniale = document.querySelectorAll('.testimonial-card');
const doturi = document.querySelectorAll('.dot');
let indexCurent = 0;

function afiseazaTestimonial(index) {
  testimoniale.forEach(t => t.classList.remove('activ'));
  doturi.forEach(d => d.classList.remove('activ'));
  if (testimoniale[index]) testimoniale[index].classList.add('activ');
  if (doturi[index]) doturi[index].classList.add('activ');
}

if (testimoniale.length > 0) {
  afiseazaTestimonial(0);
  doturi.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      indexCurent = i;
      afiseazaTestimonial(i);
    });
  });
  setInterval(() => {
    indexCurent = (indexCurent + 1) % testimoniale.length;
    afiseazaTestimonial(indexCurent);
  }, 4000);
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const tinta = document.querySelector(this.getAttribute('href'));
    if (tinta) {
      e.preventDefault();
      tinta.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== ACTIVE NAV LINK =====
const pagina = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === pagina || (pagina === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
