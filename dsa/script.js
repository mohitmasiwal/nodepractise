const resultInput = document.getElementById('result');

 
function appendValue(value) {
  resultInput.value += value;
}

 
function clearResult() {
  resultInput.value = '';
}

 
function deleteLast() {
  resultInput.value = resultInput.value.slice(0, -1);
}

 
function calculate() {
  try {
    resultInput.value = eval(resultInput.value);
  } catch (error) {
    alert('Invalid Expression');
  }
}
