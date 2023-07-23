const areaTexto = document.querySelector('.apresentationText');
const textoApresentacao = areaTexto.textContent.trim();
const firstName = document.querySelector('.firstName');
const secondName = document.querySelector('.secondName');
const textoSeparado = textoApresentacao.split('');
const copyEmail = document.getElementById('copyEmail')
const emailCamp = document.getElementById('ema')
const copyUser = document.getElementById('copyUser')
const userCamp = document.getElementById('use')

function typeWriter(elemento) {
  const textoArray = elemento.textContent.trim().split('');
  elemento.textContent = '';

  function addLetter(i) {
    if (i < textoArray.length) {
      let span = document.createElement('span');
      span.textContent = textoArray[i];

      if (i >= 25 && i < 31) {
        span.classList.add('firstName');
      } else if (i > 39 && i < 44) {
        span.classList.add('secondName');
      }

      elemento.appendChild(span);
      setTimeout(() => addLetter(i + 1), 115); // Definindo o intervalo fixo de 100 milissegundos
    }
  }

  addLetter(0);
}

// Chama a função para escrever o texto
typeWriter(areaTexto);

function copyConfirmation (button, campoTexto, texto, textoOriginal, textoCopy) {
  button.classList.add('copyConfirm')
  campoTexto.innerText = texto
  setTimeout(() => {
    button.classList.remove('copyConfirm');
    campoTexto.innerText = textoOriginal;
    navigator.clipboard.writeText(textoCopy)
  }, 500);
}

copyEmail.addEventListener('click', () => {
  copyConfirmation(copyEmail, emailCamp, 'E-mail copiado', 'Copiar e-mail', 'lucaspio.galvao@gmail.com')
})

copyUser.addEventListener('click', () => {
  copyConfirmation(copyUser, userCamp, 'Usuário copiado', 'Copiar usuário', 'cacatua_404')
})