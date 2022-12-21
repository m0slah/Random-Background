function changeBackground() {

  const num1 = Math.round(Math.random() * 255);
  const num2 = Math.round(Math.random() * 255);
  const num3 = Math.round(Math.random() * 255);

  document.body.style.background =
    'rgb('+num1+',' +num2+','+ num3+')';
}
