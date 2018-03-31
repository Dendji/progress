import './sass/style.sass';
import Progress from './components/Progress';

document.addEventListener('DOMContentLoaded', app);

function app() {
  let progress = new Progress('container');

  // TODO: validate only number
  function handleValue(event) {
    const value = parseInt(this.value);
    this.value > 100
      ? (this.value = this.value.slice(0, 2))
      : progress.setValue(this.value);
  }
  let inputValue = document.getElementById('input-value');
  let switchAnimate = document.getElementById('switch-animate');
  let switchHide = document.getElementById('switch-hide');

  inputValue.oninput = handleValue;

  switchAnimate.onchange = function(event) {
    // this.checked
    //   ? document
    //       .getElementById('outerCircle')
    //       .classList.add('progress-bar__circle--animated')
    //   : document
    //       .getElementById('outerCircle')
    //       .classList.remove('progress-bar__circle--animated');
    this.checked ? progress.setMod('animated') : progress.setMod('normal');
    console.info(`switch animate is ${this.checked}`);
  };
  switchHide.onchange = function(event) {
    console.info(`switch hide is ${this.checked}`);
    this.checked ? progress.setMod('hidden') : progress.setMod('normal');
  };
}
