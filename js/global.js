function addToHead(tag, definition) {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(definition)) {
    element[key] = value;
  }
  document.getElementsByTagName('head')[0].appendChild(element);
}

addToHead('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1'});
addToHead('link', { rel: 'icon', type: 'image/png', href: 'images/favicon/favicon-32x32.png'});
addToHead('link', { rel: 'stylesheet', href: 'css/global.css'});

function addBackButton() {
  const page = window.location.pathname.split("/").pop();
  if (page === '' || page === 'index.html') return;

  const div = document.createElement('div');
  div.classList.add('solid-arrow-left', 'icon-3');
  Object.assign(div.style, {
    position: 'absolute',
    right: '2em',
    top: '2em',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'border-radius': '50%',
    border: 'solid 2px white',
    padding: '1em',
    'background-color': 'white',
    filter: 'invert(1)',
  });
  div.addEventListener('click', (event) => {
    event.stopPropagation();
    window.history.back();
  });

  document.body.appendChild(div);
}

window.addEventListener('load', () => {
  addBackButton();
});
