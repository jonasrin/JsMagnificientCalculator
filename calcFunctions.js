function motherOfAll(btnName) {
  switch (btnName) {
    case 'summing':
      summing();
      break;
    case 'subtraction':
      subtraction();
      break;
    case 'divide':
      divide();
      break;
    case 'multiply':
      multiply();
      break;
    case 'clearas':
      clearas();
      break;
    default:

  }

}



function summing() {
  var x, y, rez;
  x = y = rez = 0;
  x = parseInt(document.getElementById("first").value);
  y = parseInt(document.getElementById("second").value);

  rez = x + y;
  document.getElementById("rezultatas").innerHTML = "suma " + rez;
}


function subtraction() {
  var x, y, rez;
  x = y = rez = 0;
  x = parseInt(document.getElementById("first").value);
  y = parseInt(document.getElementById("second").value);

  rez = x - y;
  document.getElementById("rezultatas").innerHTML = "skrtumas " + rez;
}

function divide() {
  var x, y, rez;
  x = y = rez = 0;
  x = parseInt(document.getElementById("first").value);
  y = parseInt(document.getElementById("second").value);

  rez = x / y;
  document.getElementById("rezultatas").innerHTML = "dalmuo " + rez;
}

function multiply() {
  var x, y, rez;
  x = y = rez = 0;
  x = parseInt(document.getElementById("first").value);
  y = parseInt(document.getElementById("second").value);

  rez = x * y;
  document.getElementById("rezultatas").innerHTML = "daugiklis " + rez;
}

function clearas() {
  document.getElementById("first").value = '';
  document.getElementById("second").value = '';
}
