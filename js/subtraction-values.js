window.random = weightedRand({0:1, 1:2, 2:3, 3:4, 4:5, 5:6, 6:6, 7:6, 8:6, 9:6});

window.operatorIcon = 'solid-minus';

function newValues() {
  window.last = window.number2 || -1;

  window.number1 = window.random();
  do {
    window.number2 = Math.floor(Math.random() * 11);
  } while (window.number2 > window.number1 || window.number2 === window.last);
  window.answer = window.number1 - window.number2;

  const options = (window.answer === 0)
    ? [0, 1, 2]
    : [
        window.number1 - window.number2 - 1,
        window.answer,
        window.number1 - window.number2 + 1,
      ];

  window.options = shuffle(options);
}
