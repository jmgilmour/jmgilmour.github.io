

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

window.addEventListener('click', ({ screenX }) => {
  flipCard();
});

window.addEventListener('keydown', ({ keyCode }) => {
  if (keyCode !== 32) return;
  flipCard();
});

window.addEventListener('load', () => {
  newCard();
});
