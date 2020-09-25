function addFlashcardLayout() {
  const content = document.createElement('div');
  content.id = 'content';
  content.innerHTML = `
    <div id="flip-card">
      <div id="flip-card-inner">
        <div id="card-front">
          <div class="top"></div>
          <div class="middle">
            <div class="operator ${operatorIcon()}"></div>
            <div class="number"></div>
          </div>
          <div class="bottom">&nbsp;</div>
        </div>

        <div id="card-back">
          <div class="top"></div>
          <div class="middle">
            <div class="operator ${operatorIcon()}"></div>
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
  document.querySelector('#card-front .top').innerText = window.first;
  document.querySelector('#card-front .middle .number').innerText = window.second;
}

function flipCard() {
  document.querySelector('#card-back .top').innerText = window.first;
  document.querySelector('#card-back .middle .number').innerText = window.second;
  document.querySelector('#card-back .bottom').innerText = window.result;

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
