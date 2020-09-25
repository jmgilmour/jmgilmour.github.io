addToHead('link', { rel: 'stylesheet', href: 'css/flash-cards.css'});

function addFlashcardLayout() {
  const content = document.createElement('div');
  content.id = 'content';
  content.innerHTML = `
    <div id="flip-card">
      <div id="flip-card-inner">
        <div id="card-front">
          <div class="top"></div>
          <div class="middle">
            <div class="operator ${operatorIcon}"></div>
            <div class="number"></div>
          </div>
          <div class="bottom">&nbsp;</div>
        </div>

        <div id="card-back">
          <div class="top"></div>
          <div class="middle">
            <div class="operator ${operatorIcon}"></div>
            <div class="number"></div>
          </div>
          <div class="bottom"></div>
        </div>
      </div>
    `;

  document.body.appendChild(content);
}

function newCard() {
  newValues();
  document.querySelector('#card-front .top').innerText = window.number1;
  document.querySelector('#card-front .middle .number').innerText = window.number2;
}

function flipCard() {
  document.querySelector('#card-back .top').innerText = window.number1;
  document.querySelector('#card-back .middle .number').innerText = window.number2;
  document.querySelector('#card-back .bottom').innerText = window.answer;

  document.getElementById('flip-card').classList.toggle('flipped');

  if (!document.getElementById('flip-card').classList.contains('flipped')) {
    newCard();
  }
}

window.addEventListener('click', () => {
  flipCard();
});

window.addEventListener('keydown', ({ keyCode }) => {
  if (keyCode !== 32) return;
  flipCard();
});

window.addEventListener('load', () => {
  addFlashcardLayout();
  newCard();
});
