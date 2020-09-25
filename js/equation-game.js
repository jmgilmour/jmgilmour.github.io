addToHead('link', { rel: 'stylesheet', href: 'css/equation-game.css'});

function addEquationGameLayout() {
  const top = document.createElement('div');
  top.id = 'top';
  top.innerHTML = `
    <div id="number-1"></div>
    <div id="operator" class="${operatorIcon()} icon-4"></div>
    <div id="number-2"></div>
    <div id="equals" class="solid-equals icon-4"></div>
    <div id="blank"></div>
    <div id="result">
      <div id="correct" class="solid-check icon-7 icon-green"></div>
      <div id="incorrect" class="solid-times icon-7 icon-red"></div>
    </div>
  `;
  document.body.appendChild(top);

  const bottom = document.createElement('div');
  bottom.id = 'bottom';
  document.body.appendChild(bottom);

  const score = document.createElement('div');
  score.id = 'score';
  score.innerText = '0';
  document.body.appendChild(score);
}

function updateScore() {
  document.getElementById('score').innerText = window.score;
}

function newProblem() {
  newValues();

  document.getElementById('number-1').innerText = window.number1;
  document.getElementById('number-2').innerText = window.number2;

  clearBottom();

  const bottom = document.getElementById('bottom');
  window.options.forEach((option) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option', 'button');
    optionElement.innerText = option;
    optionElement.addEventListener('click', () => submitAnswer(option));
    bottom.appendChild(optionElement);
  });
}

function clearBottom() {
  document.getElementById('bottom').innerHTML = '';
}

function submitAnswer(answer) {
  document.getElementById('blank').innerText = answer;
  if (answer === window.answer) {
    document.getElementById('incorrect').style.display = 'none';
    document.getElementById('correct').style.visibility = 'visible';

    window.score += 1;
    localStorage.setItem('score', window.score);
    updateScore();
  } else {
    document.getElementById('correct').style.display = 'none';
    document.getElementById('incorrect').style.visibility = 'visible';
  }

  clearBottom();

  const newProblemButton = document.createElement('div');
  newProblemButton.classList.add('button', 'solid-sync-alt', 'icon-7');
  newProblemButton.addEventListener('click', () => {
    document.getElementById('blank').innerText = '';

    document.getElementById('correct').style.display = 'block';
    document.getElementById('incorrect').style.display = 'block';
    document.getElementById('correct').style.visibility = 'hidden';
    document.getElementById('incorrect').style.visibility = 'hidden';
    newProblem();
  });
  document.getElementById('bottom').appendChild(newProblemButton);
}

window.addEventListener('load', () => {
  window.score = parseInt(localStorage.getItem(`${uuid}::score`)) || 0;

  addEquationGameLayout();
  updateScore();
  newProblem();
});
