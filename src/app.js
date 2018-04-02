import './sass/style.sass';
import Progress from './components/Progress';

let progress = undefined;

document.addEventListener('DOMContentLoaded', app);

function app() {
  progress = new Progress('container');
  progress.setMod('normal');

  let inputValue = document.getElementById('input-value');
  let switchAnimate = document.getElementById('switch-animate');
  let switchHide = document.getElementById('switch-hide');

  inputValue.oninput = handleValue;

  switchAnimate.onchange = handleSwitchAnimate;
  switchHide.onchange = handleSwitchHide;
}

function handleValue(event) {
  const value = parseInt(this.value);
  this.value > 100
    ? (this.value = this.value.slice(0, 2))
    : progress.setValue(this.value);
}
function handleSwitchAnimate(event) {
  this.checked ? progress.setMod('animated', 'yes') : progress.setMod('normal');
}

function handleSwitchHide(event) {
  this.checked ? progress.setMod('hidden') : progress.setMod('normal');
}
