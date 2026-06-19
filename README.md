# Dulce Vis – Site Web Cofetărie

Site web complet, responsive pentru cofetăria fictivă „Dulce Vis".

## Tehnologii utilizate
- HTML5 (structură semantică)
- CSS3 (Flexbox, Grid, media queries, animații)
- Bootstrap 5 (grid, componente)
- JavaScript (vanilla JS, manipulare DOM, validare)
- Font Awesome 6 (iconițe)
- Google Fonts: Pacifico + Raleway

## Structura proiectului
```
dulce-vis/
├── index.html          # Pagina Acasă
├── products.html       # Pagina Produse (cu filtrare + sortare)
├── custom-cake.html    # Configurator Tort Interactiv
├── gallery.html        # Galerie cu Lightbox
├── about.html          # Despre noi (cu counter animat)
├── contact.html        # Contact (formular + hartă)
├── README.md
├── css/
│   └── style.css       # Stiluri personalizate
└── js/
    ├── main.js          # Funcții comune (back-to-top, slider, nav activ)
    ├── validation.js    # Validare formulare
    ├── configurator.js  # Configurator tort + calculator preț
    └── gallery.js       # Galerie filtrare + lightbox
```

## Funcționalități JavaScript implementate
1. Validare formular de comandă (custom-cake.html, contact.html)
2. Meniu responsive – Bootstrap collapse
3. Slider testimoniale – automat + puncte
4. Smooth scroll – toate paginile
5. Buton Back to Top – apare după scroll 300px
6. Filtrare produse pe categorie (products.html)
7. Configurator tort interactiv (custom-cake.html)
8. Calculator preț estimativ în timp real
9. Galerie cu lightbox (gallery.html)
10. Counter animat cu Intersection Observer (about.html)

## Culori (design system)
- Roz principal: #F48FB1
- Maro ciocolată: #6D4C41
- Crem fundal: #FFF8F0

## Cum se rulează
Deschide `index.html` direct în browser sau folosește Live Server din VS Code.

## Publicare
Încarcă folderul pe GitHub și activează GitHub Pages din Settings > Pages.
