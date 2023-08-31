const criarElemento = (elemento, pai, id, classe) => {
  const element = document.createElement(elemento);
  if (pai !== '') pai.appendChild(element);
  if (id !== '') element.id = id;
  if (classe !== '') element.classList.add(classe);
  return element;
};

const estilizarHeader = (headerTag, spanTagFrase) => {
  headerTag.style.backgroundColor = 'teal';
  headerTag.style.color = 'white';
  headerTag.style.height = '100px';
  headerTag.style.textAlign = 'center';
  headerTag.children[0].innerText = 'Gerador de Senhas Aleatórias - Caracteres Possíveis: '
  headerTag.children[1].innerText = 'Gerador de Senhas Aleatórias - Caracteres Possíveis: '
};

const criarHeader = () => {
  const headerTag = criarElemento('header', document.body, '', '');
  const h1Tag = criarElemento('h1', headerTag, 'header-titulo', '');
  const ulTag = criarElemento('ul', h1Tag, 11, 'header-lista-grupo', '');
  const liTagTitulo = criarElemento('li', ulTag, '', 'header-lista-item');
  const liTagCaracteresPossiveis = criarElemento('li', ulTag, '', 'header-lista-item');
  estilizarHeader(headerTag);
};

const paginaCarregada = () => {
  criarHeader();
};

window.addEventListener('load', paginaCarregada);