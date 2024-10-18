const form = document.getElementById('formN');
const mensagem = document.getElementById('mensagem');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const erroA = document.getElementById('errorMessage-A');
const erroB = document.getElementById('errorMessage-B');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (campoB.value > campoA.value) {
    mensagem.textContent = "Formulário válido!";
    mensagem.classList.remove('formError');
    mensagem.classList.add('formSuccess');
    campoA.value = '';
    campoB.value = '';

  } else {
    mensagem.textContent = "Formulário inválido! Por favor, corrija os erros!";
    mensagem.classList.add('formError');
    campoA.classList.add('error');
    campoB.classList.add('error');
    erroA.style.display = "block";
    erroB.style.display = "block";
  }
});

campoA.addEventListener('focus', function () {
  erroA.style.display = "none";
  campoA.classList.remove('error');
});

campoB.addEventListener('focus', function () {
  erroB.style.display = "none";
  campoB.classList.remove('error');
});
