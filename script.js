let temp = document.querySelectorAll('button');

temp.forEach((item) => {
  let inputLine = document.querySelector('input');
  item.addEventListener('click', function () {
    console.log(item.innerText);
    if (item.innerText == '=') {
      let equasion = inputLine.value
        .replace('×', '*')
        .replace('÷', '/')
        .replace('%', '/100*');
      let antwort = eval(equasion);
      inputLine.value = antwort;
      console.log(antwort);
    } else if (item.innerText == 'CE') {
      inputLine.value = '';
    } else if (item.innerText == 'Xʸ') {
      inputLine.value = inputLine.value + '^';
    } else if (item.innerText == '') {
      inputLine.value = inputLine.value + '^';
    } else inputLine.value = inputLine.value + item.innerText;
  });
});
