// ===== DULCE VIS - Galerie + Lightbox =====

// Filtrare galerie
document.querySelectorAll('.filtru-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const categorie = this.dataset.cat;
    document.querySelectorAll('.filtru-btn').forEach(b => b.classList.remove('activ'));
    this.classList.add('activ');

    document.querySelectorAll('.galerie-item').forEach(item => {
      if (categorie === 'toate' || item.dataset.cat === categorie) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.galerie-item').forEach(item => {
  item.addEventListener('click', function() {
    const src = this.querySelector('img').src;
    if (lightbox && lightboxImg) {
      lightboxImg.src = src;
      lightbox.classList.add('activ');
      document.body.style.overflow = 'hidden';
    }
  });
});

const btnClose = document.getElementById('lightboxClose');
if (btnClose) {
  btnClose.addEventListener('click', () => {
    lightbox.classList.remove('activ');
    document.body.style.overflow = '';
  });
}

if (lightbox) {
  lightbox.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('activ');
      document.body.style.overflow = '';
    }
  });
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('activ')) {
    lightbox.classList.remove('activ');
    document.body.style.overflow = '';
  }
});
