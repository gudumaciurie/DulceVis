// ===== DULCE VIS - Configurator Tort =====

const preturi = {
  blat: { vanilie: 50, ciocolata: 60, lamaie: 55, capsuni: 65 },
  crema: { frisca: 40, mascarpone: 55, ciocolata: 50, fructe: 60 },
  decor: { simplu: 30, flori: 70, fondant: 90, personalizat: 120 },
  dimensiune: { 6: 0, 8: 50, 10: 100, 12: 150 }
};

const selectii = {
  blat: 'vanilie',
  crema: 'frisca',
  decor: 'simplu',
  dimensiune: '6'
};

function calculeazaPret() {
  const total = preturi.blat[selectii.blat] +
                preturi.crema[selectii.crema] +
                preturi.decor[selectii.decor] +
                preturi.dimensiune[selectii.dimensiune];
  const el = document.getElementById('pretTotal');
  if (el) el.textContent = total + ' MDL';
}

function actualizeazaRezumat() {
  const el = document.getElementById('rezumatSelectii');
  if (!el) return;
  const etichete = {
    blat: { vanilie: 'Vanilie', ciocolata: 'Ciocolată', lamaie: 'Lămâie', capsuni: 'Căpșuni' },
    crema: { frisca: 'Frișcă', mascarpone: 'Mascarpone', ciocolata: 'Cremă Ciocolată', fructe: 'Cremă Fructe' },
    decor: { simplu: 'Simplu', flori: 'Flori Naturale', fondant: 'Fondant', personalizat: 'Personalizat' },
    dimensiune: { 6: '6 porții', 8: '8 porții', 10: '10 porții', 12: '12 porții' }
  };
  el.innerHTML = `
    <span class="badge bg-light text-dark me-2">🍰 ${etichete.blat[selectii.blat]}</span>
    <span class="badge bg-light text-dark me-2">🍦 ${etichete.crema[selectii.crema]}</span>
    <span class="badge bg-light text-dark me-2">🎨 ${etichete.decor[selectii.decor]}</span>
    <span class="badge bg-light text-dark">👥 ${etichete.dimensiune[selectii.dimensiune]}</span>
  `;
}

function initConfigurator() {
  document.querySelectorAll('[data-tip]').forEach(btn => {
    btn.addEventListener('click', function() {
      const tip = this.dataset.tip;
      const val = this.dataset.val;
      document.querySelectorAll(`[data-tip="${tip}"]`).forEach(b => b.classList.remove('selectat'));
      this.classList.add('selectat');
      selectii[tip] = val;
      calculeazaPret();
      actualizeazaRezumat();
    });
  });
  calculeazaPret();
  actualizeazaRezumat();
}

document.addEventListener('DOMContentLoaded', initConfigurator);
