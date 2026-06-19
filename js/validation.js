// ===== DULCE VIS - Validare formulare =====

function valideazaEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function valideazaTelefon(tel) {
  return /^[\d\s\+\-\(\)]{9,15}$/.test(tel.trim());
}

function marcheazaValid(camp) {
  camp.classList.remove('is-invalid');
  camp.classList.add('is-valid');
}

function marcheazaInvalid(camp, mesaj) {
  camp.classList.remove('is-valid');
  camp.classList.add('is-invalid');
  const feedback = camp.nextElementSibling;
  if (feedback && feedback.classList.contains('invalid-feedback')) {
    feedback.textContent = mesaj;
  }
}

// ===== FORMULAR CONTACT =====
const formContact = document.getElementById('formContact');
if (formContact) {
  formContact.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const nume = this.querySelector('#nume');
    const email = this.querySelector('#email');
    const telefon = this.querySelector('#telefon');
    const mesaj = this.querySelector('#mesaj');

    if (!nume.value.trim() || nume.value.trim().length < 3) {
      marcheazaInvalid(nume, 'Introduceți un nume valid (minim 3 caractere)');
      valid = false;
    } else marcheazaValid(nume);

    if (!valideazaEmail(email.value)) {
      marcheazaInvalid(email, 'Introduceți un email valid');
      valid = false;
    } else marcheazaValid(email);

    if (!valideazaTelefon(telefon.value)) {
      marcheazaInvalid(telefon, 'Introduceți un număr de telefon valid');
      valid = false;
    } else marcheazaValid(telefon);

    if (!mesaj.value.trim() || mesaj.value.trim().length < 10) {
      marcheazaInvalid(mesaj, 'Mesajul trebuie să conțină cel puțin 10 caractere');
      valid = false;
    } else marcheazaValid(mesaj);

    if (valid) {
      const alerta = document.getElementById('alertaSucces');
      if (alerta) {
        alerta.style.display = 'block';
        formContact.reset();
        formContact.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        setTimeout(() => alerta.style.display = 'none', 5000);
      }
    }
  });
}

// ===== FORMULAR COMANDĂ TORT =====
const formTort = document.getElementById('formTort');
if (formTort) {
  formTort.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const numeC = this.querySelector('#numeComandar');
    const emailC = this.querySelector('#emailComandar');
    const dataComandar = this.querySelector('#dataComandar');

    if (!numeC.value.trim() || numeC.value.trim().length < 3) {
      marcheazaInvalid(numeC, 'Introduceți un nume valid');
      valid = false;
    } else marcheazaValid(numeC);

    if (!valideazaEmail(emailC.value)) {
      marcheazaInvalid(emailC, 'Introduceți un email valid');
      valid = false;
    } else marcheazaValid(emailC);

    if (!dataComandar.value) {
      marcheazaInvalid(dataComandar, 'Selectați data dorită');
      valid = false;
    } else {
      const dataSel = new Date(dataComandar.value);
      const azi = new Date();
      azi.setHours(0,0,0,0);
      if (dataSel < azi) {
        marcheazaInvalid(dataComandar, 'Data trebuie să fie în viitor');
        valid = false;
      } else marcheazaValid(dataComandar);
    }

    if (valid) {
      const alerta = document.getElementById('alertaSuccesTort');
      if (alerta) {
        alerta.style.display = 'block';
        setTimeout(() => alerta.style.display = 'none', 5000);
      }
    }
  });
}
