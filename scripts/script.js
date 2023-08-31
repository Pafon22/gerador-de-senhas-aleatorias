const possiveisCaracteresIniciais = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()[]{}_-+';

const criarElemento = (elemento, pai, id, classe) => {
  const element = document.createElement(elemento);
  if (pai !== '') pai.appendChild(element);
  if (id !== '') element.id = id;
  if (classe !== '') element.classList.add(classe);
  return element;
};

const classeTitulo = (elementos) => {
  for (elemento of elementos) {
    if (elemento.classList.contains('titulo')) {
      elemento.style.textShadow = '3px 3px 3px black';
      elemento.style.color = 'white';
    }
  }
};

const verificarClasse = (elementos) => {
  classeTitulo(elementos);
}

const estilizarBodyEHeader = (headerTag) => {
  document.body.style.backgroundColor = 'black';
  headerTag.style.backgroundColor = 'teal';
  headerTag.style.padding = '0';
  headerTag.style.textAlign = 'center';
  headerTag.children[0].style.margin = '0';
  headerTag.children[0].innerText = 'Gerador de Senhas Aleatórias';
  // verificarClasse([headerTag.children[0]]);
};

const criarHeader = () => {
  const headerTag = criarElemento('header', document.body, '', '');
  const h1Tag = criarElemento('h1', headerTag, '', 'titulo');
  estilizarBodyEHeader(headerTag);
  verificarClasse([h1Tag]);
};

estilizarMainEsq = (section) => {
  const sectionEsq = section;
  const h2Tag = sectionEsq.getElementsByTagName('h2')[0];
  sectionEsq.style.width = '25%';
  sectionEsq.style.backgroundColor = 'red';
  verificarClasse([h2Tag]);
  h2Tag.innerText = 'Possíveis Caracteres Gerados'
};

estilizarMainMeio = (section) => {
  const sectionMeio = section;
  const h2Tag = criarElemento('h2', sectionMeio, '', 'titulo');
  sectionMeio.style.width = '50%';
  sectionMeio.style.backgroundColor = 'green';
  
  verificarClasse([h2Tag]);
  h2Tag.innerText = 'Possíveis Caracteres Gerados';
};

estilizarMainDir = (section) => {
  const sectionDir = section;
  const h2Tag = criarElemento('h2', sectionDir, '', 'titulo');
  sectionDir.style.width = '25%';
  sectionDir.style.backgroundColor = 'blue';
  sectionDir.style.textAlign = 'center';
  verificarClasse([h2Tag]);
  h2Tag.innerText = 'Possíveis Caracteres Gerados';
};

const criarSectionMain = (section) => {
  const h2Tag = criarElemento('h2', section, '', 'titulo');
  return section;
};


const criarMain = () => {
  const mainTag = criarElemento('main', document.body, '', '');
  mainTag.style.display = 'flex';
  for (let index = 0; index < 3; index += 1) {
    criarElemento('section', mainTag, '', '').style.textAlign = 'center';;
  }
  estilizarMainEsq(criarSectionMain(mainTag.children[0]));
  estilizarMainMeio(criarSectionMain(mainTag.children[1]));
  estilizarMainDir(criarSectionMain(mainTag.children[2]));
};

const paginaCarregada = () => {
  criarHeader();
  criarMain();
};

window.addEventListener('load', paginaCarregada);