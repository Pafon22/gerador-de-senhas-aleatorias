const moverChave = () => {
  const chave = document.getElementById('chave');
  const chaveY = chave.style.transform.slice(-6);
  console.log(chaveY);
  if (chaveY === '-100%)') {
    chave.style.transform = 'translate(-50%, 0)';
    console.log(chave.style.transform);
  }
  else {
    chave.style.transform = 'translate(-50%, -100%)';
    console.log(chave.style.transform);
  }
};

const estilizarChave = (chave, main) => {
  main.style.index = 0;
  main.style.position = 'relative';
  chave.id = 'chave';
  chave.src = 'img/chave.png';
  chave.style.zIndex = '-1';
  chave.style.position = 'absolute';
  chave.style.width = '500px';
  chave.style.opacity = '1';
  chave.style.transition = 'transform 2s';
  chave.style.transform = 'translate(-50%, -100%)';
};

const criarChave = () => {
  const main = document.getElementsByTagName('main')[0];
  const antigaChave = document.getElementById('chave');
  if (antigaChave) antigaChave.remove();
  const chave = document.createElement('img');
  estilizarChave(chave, main);
  main.appendChild(chave);
  return chave;
};

criarChave();

const showPassword = () => {
  document.getElementById('textGeneratedPassword').innerHTML = "Senha Gerada:";
  const sizeCharacters = document.getElementById('sizeCharacters').value;
  let generatedPassword = document.getElementById('generatedPassword');
  generatedPassword.innerText = generatePassword(sizeCharacters);
  moverChave();
};

const generatePassword = (size) => {
  size = Number(size);
  if (isNaN(size) || size == "") {
    return 'Quantidade de caracteres não definida.';
  }
  const arrayNewPass = [];
  let newPass = null;
  const possibleCharacter = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()[]{}_-+';

  for (let index = 0; index < size; index += 1) {
    let newNumber = Math.floor(Math.random() * possibleCharacter.length);
    let randomCaps = Math.floor(Math.random() * 2);
    newNumber = possibleCharacter[newNumber].toString();
    if (randomCaps) {
      newNumber = newNumber.toUpperCase();
    };
    arrayNewPass.push(newNumber);
  }
  newPass = arrayNewPass.join('');
  return newPass;
};
