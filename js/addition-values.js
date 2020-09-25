window.operatorIcon = 'solid-plus';

function newValues() {
  window.number1 = Math.floor(Math.random() * 11);
  window.number2 = Math.floor(Math.random() * 11);
  window.answer = window.number1 + window.number2;

  const options = (window.answer === 0)
    ? [0, 1, 2]
    : [
        window.number1 + window.number2 - 1,
        window.answer,
        window.number1 + window.number2 + 1,
      ];

  window.options = shuffle(options);
}
