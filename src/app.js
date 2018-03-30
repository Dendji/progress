import './sass/style.sass';

document.addEventListener('DOMContentLoaded', app);

function app() {
  let inputValue = document.getElementById('input-value');
  let switchAnimate = document.getElementById('switch-animate');
  let switchHide = document.getElementById('switch-hide');

  inputValue.oninput = handleValue;

  switchAnimate.onchange = function(event) {
    console.info(`switch animate is ${this.checked}`);
  };
  switchHide.onchange = function(event) {
    console.info(`switch hide is ${this.checked}`);
  };
}
function handleValue(event) {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
}
