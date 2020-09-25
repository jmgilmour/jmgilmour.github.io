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
  console.log('>>>> testing exclude index page');
}
addBackButton();
