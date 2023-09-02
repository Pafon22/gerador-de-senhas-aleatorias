const paleta = ['linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(4,116,88,1) 45%, rgba(0,0,0,1) 100%)'];
const caracteresIniciais = ['abcdefghijklmnopqrstuvwxyz0123456789-/+*%_=!@#$¨&()[]{}|'];

const criarElemento = (elemento, pai, id, classe) => {
  const element = document.createElement(elemento);
  if (pai !== '') {
    pai.appendChild(element);
  }
  if (id !== '') {
    element.id = id;
  }
  if (classe !== '') {
    element.classList.add(classe);
  }
  return element;
};

const estilizarBody = () => {
  document.body.style.margin = 0;
  document.body.style.color = 'white';
  document.body.style.textShadow = '3px 3px 3px black';
  document.body.style.background = paleta[0];
};

const estilizarH1Header = (h1) => {
  h1.innerText = 'Gerador de Senhas Aleatórias';
  h1.style.margin = 0;
};

const criarH1Header = (header) => {
  const h1 = criarElemento('h1', header, '', 'texto');
  estilizarH1Header(h1);
};

const estilizarHeader = (header) => {
  header.style.textAlign = 'center';
};

const criarHeader = () => {
  const header = criarElemento('header', document.body, 'header', '');
  criarH1Header(header);
  estilizarHeader(header);
};

const estilizarOption = (option) => {
  option.style.textAlign = 'center'
  option.style.fontSize = '25px';
  option.style.width = '90%';
  option.style.padding = '10px 0';
  option.style.margin = '10px 0';
  option.style.color = 'white';
  option.style.background = 'black';
  option.style.borderRadius = '20px';
  option.style.border = 'green 2px solid';
  option.style.transition = 'border-width 0.2s linear';
  option.style.display = 'inline-block';
  if (option.classList.contains('customizados')) {
    option.style.border = 'red 4px solid';
    if (option.classList.contains('texto-opcoes')) {
      option.style.color = 'red';
      option.style.textDecoration = 'line-through';
    }
  }
};

const gerarAlfabetoFinal = () => {
  const verdes = document.getElementsByClassName('verdes-texto');
  let alfabetoFinal = '';
  for (let index = 0; index < verdes.length; index += 1) {
    if (verdes[index].id !== 'adicionar-customizados' && verdes[index].id !== 'remover-customizados') {
      alfabetoFinal += verdes[index].innerText;
    }
    if (verdes[index].id === 'adicionar-customizados-texto') {
      const arrayFinal = alfabetoFinal.split('');
      const novos = document.getElementById('input-adicionar-customizados').value;
      for (novo of novos) {
        if (!arrayFinal.includes(novo)) {
          arrayFinal.push(novo);
        }
      }
      alfabetoFinal = arrayFinal.join('');
    }
    if (verdes[index].id === 'remover-customizados-texto') {
      let removidos = document.getElementById('input-remover-customizados').value;
      removidos = removidos.replaceAll('\\', '\\\\');
      const re = new RegExp('[' + removidos.toString() + ']', 'g');
      const arrayNormalizado = alfabetoFinal.replace(re, "");
      return arrayNormalizado;
    }
  }
  return alfabetoFinal;
};

const foramSelecionados = (button, span, selecteds) => {
  if (!selecteds) {
    button.classList.remove('verdes');
    span.classList.remove('verdes-texto');
    button.style.border = 'red 4px solid';
    span.style.textDecoration = 'line-through';
    span.style.border = 'red 4px solid';
    span.style.color = 'red';
  }
  else {
    button.classList.add('verdes');
    span.classList.add('verdes-texto');
    button.style.border = 'green 2px solid';
    span.style.border = 'green 2px solid';
    span.style.textDecoration = 'none';
    span.style.color = 'white';
  }
  document.getElementById('possiveis-caracteres').innerText = `Possíveis Caracteres: \n ${gerarAlfabetoFinal()}`;
};


const mouseClickButton = (event) => {
  const { target } = event;
  const buttons = document.getElementsByClassName('click-opcoes');
  const spans = document.getElementsByClassName('texto-opcoes');
  let selecionado = '';
  let selecteds = false;
  for (let index = 0; index < buttons.length; index += 1) {
    if (buttons[index] === target) selecionado = index;
  }
  if (!target.classList.contains('verdes') || !target.classList.contains('click-opcoes')) {
    selecteds = true;
  }
  foramSelecionados(target, spans[selecionado], selecteds);
};

const criarListaEsquerda = (listaEsquerda) => {
  const arrayOpcoes = ['Letras Maiúsculas', 'Letras Minúsculas', 'Números', 'Símbolos', 'Adicionar Customizados', 'Remover Customizados'];
  for (const opcao of arrayOpcoes) {
    const liTag = criarElemento('li', listaEsquerda, '', 'lista-item');
    liTag.classList.add('click-opcoes');
    liTag.innerText = opcao;
    liTag.classList.add('verdes');
    if (opcao === 'Adicionar Customizados' || opcao === 'Remover Customizados') {
      liTag.id = opcao.split(' ').join('-').toLowerCase();
      liTag.classList.add('customizados');
      liTag.classList.remove('verdes');
    }
    liTag.style.textAlign = 'center';
    estilizarOption(liTag);
  }
};

const criarListaDireita = (listaDireita) => {
  const letrasMaiusculas = caracteresIniciais[0].toUpperCase().split('').splice(0, 26).join('');
  const letrasMinusculas = caracteresIniciais[0].split('').splice(0, 26).join('');
  const numeros = caracteresIniciais[0].replace(/[^0-9]+/g, "");
  const simbolos = caracteresIniciais[0].replace(/[a-z]+[0-9]+/g, "");
  const arrayOpcoes = [letrasMaiusculas, letrasMinusculas, numeros, simbolos, 'Adicionar Customizados', 'Remover Customizados'];
  for (let index = 0; index < arrayOpcoes.length; index += 1) {
    const opcao = arrayOpcoes[index];
    const liTag = criarElemento('li', listaDireita, '', 'lista-item');
    liTag.classList.add('texto-opcoes');
    liTag.innerText = opcao;
    liTag.style.textAlign = 'center';
    liTag.classList.add('verdes-texto');
    if (opcao === 'Adicionar Customizados' || opcao === 'Remover Customizados') {
      liTag.id = opcao.split(' ').join('-').toLowerCase() + '-texto';
      liTag.innerText = '';
      liTag.classList.add('customizados');
      liTag.classList.remove('verdes-texto');
      const input = criarElemento('input', liTag, `input-${opcao.split(' ').join('-').toLowerCase()}`, '');
      input.style.width = '90%';
      input.style.backgroundColor = 'black';
      input.style.color = 'white';
      input.placeholder = 'Digite aqui...';
      liTag.appendChild(input);
    }
    estilizarOption(liTag);
  }
};

const criarSectionDireita = (main) => {
  const sectionDireita = criarElemento('section', main, 'section-direita', 'section-menu');
  const listaDireita = criarElemento('ul', sectionDireita, 'lista-Direita', 'lista');
  listaDireita.style.listStyle = 'none';
  criarListaDireita(listaDireita);
};

const criarSectionEsquerda = (main) => {
  const sectionEsquerda = criarElemento('section', main, 'section-esquerda', 'section-menu');
  const listaEsquerda = criarElemento('ul', sectionEsquerda, 'lista-esquerda', 'lista');
  listaEsquerda.style.listStyle = 'none';
  criarListaEsquerda(listaEsquerda);
};

const estilizarTextoBaixo = (textoTag) => {
  textoTag.style.wordWrap = 'break-word';
  textoTag.style.margin = '0';
};

const estilizarInputQuantidade = (input) => {
  input.style.width = '50%';
  input.style.height = '30%';
  input.style.fontSize = '100%';
  input.style.margin = '0 0 0 1%';
  input.placeholder = 'Digite um valor...';
  input.min = '1';
  input.max = '100';
  input.type = 'number';
};

const estilizarButtonQuantidade = (button) => {
  button.style.width = '10%';
  button.style.height = '20%';
  button.style.fontSize = '100%';
  button.style.margin = '0 0 0 1%';
  button.innerText = '➔';
};

const gerarSenha = () => {
  const alfabetoFinal = gerarAlfabetoFinal();
  const senhaArray = [];
  const quantidade = document.getElementById('quantidade').value;
  for (let index = 0; index < quantidade; index += 1) {
    const randomNumber = Math.floor(Math.random() * alfabetoFinal.length);
    senhaArray.push(alfabetoFinal[randomNumber]);
  }
  const senha = senhaArray.join('');
  return senha;
};


const verificarForm = () => {
  const quantidade = document.getElementById('quantidade').value;
  if (!quantidade) {
    document.getElementById('senha-gerada').innerText = 'Quantidade de caracteres inválida.'
  }
  if (quantidade > 0 && quantidade <= 100) {
    document.getElementById('senha-gerada').innerText = `Senha Gerada: \n ${gerarSenha()}`;
  }
};

const criarListaBaixo = (listaBaixo) => {
  for (let index = 0; index < 3; index += 1) {
    const liTag = criarElemento('li', listaBaixo, '', 'lista-baixo-item');
    liTag.style.margin = '1%';
    liTag.style.backgroundColor = 'rgba(0,0,0,0.5)';
    liTag.style.width = '31%';
  }
  const liTags = document.getElementsByClassName('lista-baixo-item');
  const h2PossiveisCaracteres = criarElemento('h2', liTags[0], 'possiveis-caracteres', '');
  const h2Quantidade = criarElemento('h2', liTags[1], 'quantidade-texto', '');
  const h2Senha = criarElemento('h2', liTags[2], 'senha-gerada', '');
  const form = criarElemento('form', liTags[1], '', '');
  const input = criarElemento('input', form, '', '');
  const button = criarElemento('button', form, 'button-quantidade', '');
  h2PossiveisCaracteres.innerText = `Possíveis Caracteres: \n ${gerarAlfabetoFinal()}`;
  h2Quantidade.innerText = 'QUANTIDADE DE CARACTERES';
  h2Senha.innerText = '';
  form.action = "javascript:void(0);";
  input.id = 'quantidade';
  estilizarTextoBaixo(h2PossiveisCaracteres);
  estilizarTextoBaixo(h2Quantidade);
  estilizarTextoBaixo(h2Senha);
  estilizarInputQuantidade(input);
  estilizarButtonQuantidade(button);
};

const criarSectionBaixo = (body) => {
  const sectionBaixo = criarElemento('section', body, 'section-baixo', 'section-menu');
  const listaBaixo = criarElemento('ul', sectionBaixo, 'lista-baixo', 'lista');
  listaBaixo.style.listStyle = 'none';
  listaBaixo.style.display = 'flex';
  listaBaixo.style.margin = '0';
  criarListaBaixo(listaBaixo);
  return sectionBaixo;
};

const criarMain = () => {
  const main = criarElemento('main', document.body, 'main', '');
  main.style.display = 'flex';
  main.style.justifyContent = 'space-around';
  criarSectionEsquerda(main);
  criarSectionDireita(main);
  criarSectionBaixo(document.body);
};

const inputVerde = (event) => {
  const { target } = event;
  const buttonTags = document.getElementsByClassName('click-opcoes');
  if (target.id === 'input-adicionar-customizados') {
    foramSelecionados(buttonTags[4], document.getElementById('adicionar-customizados-texto'), true);
  } else if (target.id === 'input-remover-customizados') {
    foramSelecionados(buttonTags[5], document.getElementById('remover-customizados-texto'), true);
  }
};

const mouseOverButton = (event) => {
  if (event.type === 'mouseover') {
    event.target.style.opacity = 0.8;
  } else {
    event.target.style.opacity = 1;
  }
};

const criarFooter = () => {
  const footer = criarElemento('footer', document.body, 'footer', '');
  footer.style.background = 'black';
  const h2 = criarElemento('h2', footer, '', '');
  h2.innerText = 'Desenvolvido por ';
  const a = criarElemento('a', h2, '', '');
  a.href = 'https://linktr.ee/pafon22';
  a.innerText = 'Pafon';
  a.style.color = 'yellow';
  a.target = '_blank';
  h2.style.textAlign = 'center';
};

const paginaCarregada = () => {
  estilizarBody();
  criarHeader();
  criarMain();
  criarFooter();
  const buttonTags = document.getElementsByClassName('click-opcoes');
  const inputAdd = document.getElementById('input-adicionar-customizados');
  const inputRem = document.getElementById('input-remover-customizados');
  const buttonForm = document.getElementById('button-quantidade');
  for (const buttonTag of buttonTags) {
    buttonTag.addEventListener('click', mouseClickButton);
    buttonTag.addEventListener('mouseover', mouseOverButton);
    buttonTag.addEventListener('mouseleave', mouseOverButton);
  }
  inputAdd.addEventListener('input', inputVerde);
  inputRem.addEventListener('input', inputVerde);
  buttonForm.addEventListener('click', verificarForm);
};

window.addEventListener('load', paginaCarregada);
