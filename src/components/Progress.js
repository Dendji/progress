/** @module Progress
 *  @author Denis Zuykov <dendjet@gmail.com>
 */

const svgNS = 'http://www.w3.org/2000/svg';

// detect empty parameters in functions
const required = () => {
  throw new Error('Progress component is missing parameter');
};
/** @constant {array} */
const modes = ['normal', 'animated', 'hidden'];

/** @constant {number} */
const radius = 90;
/** @constant {number} */
const circleLength = radius * Math.PI * 2;
/** @constant {number} */
const animationPeriod = 1000;
/** @constant {string} */
const outerCircleClass = 'progress-bar__circle--outer';

/** Class representing a progress bar. */
class Progress {
  /**
   * Create a progress bar.
   * @constructor
   * @param {string} containerId - DOM container id to put progress bar in. If containerId is empty then throw an error.
   * @param {number} value - Initial value for progress bar.
   * @param {string} mode - Initial value for mode. Values are possible: normal, animated and hidden
   */
  constructor(containerId = required(), value = 10, mode = 'normal') {
    // check if contaienr exists in DOM
    if (!document.getElementById(containerId)) {
      throw new Error(`There is no element with id ${containerId} in DOM`);
    }

    // check if modes include parameter mode
    if (!modes.includes(mode)) {
      throw new Error(`List of modes includes only: normal, animated, hidden`);
    }

    // check if value is in specified interval
    if (value < 0 || value > 100) value = 50;

    this.containerId = containerId;
    this.value = value;
    this.mode = mode;
    this.animated = '';
    this.init();
  }
  // creating progress bar and appending to DOM
  init() {
    let container = document.getElementById(this.containerId);
    let svg = createSvg();
    let innerCircle = createCircle('inner', this.value);
    let outerCircle = createCircle('outer', this.value);

    svg.appendChild(innerCircle);
    svg.appendChild(outerCircle);
    container.appendChild(svg);
  }
  /**
   * New value setter
   * @param {number} newValue - Value from 0 to 100.
   * @return {boolean} True if number is correct
   */
  setValue(value = 0) {
    // check if value is in specified interval
    if (value < 0 || value > 100) {
      return false;
    }
    // check if value didn't change or mode is animated or hidden
    if (value === this.value || this.mode !== 'normal') {
      return false;
    }
    // check if number is digit
    if (!value.match(/\d+/g)) {
      return false;
    }
    this._value = value;
    return true;
  }
  // value setter
  set _value(newValue) {
    // if progress initialized then handle value
    if (this.circleDOM) {
      const circle = this.circleDOM;
      // get percentage from circle length
      const percentage = (100 - newValue) / 100 * circleLength;
      circle.style.strokeDashoffset = percentage;
    }

    this.value = newValue;
  }

  /**
   * Set Progress bar mode.
   * @param {string} mode - Normal, amimated or hidden.
   * @param {string} animated - Yes or empty value
   * @return {number} A circle length.
   */
  setMod(mode = 'normal', animated = '') {
    this.mode = mode;
    this.animated = animated;
    const { containerId } = this;
    const svg = document.querySelector(`#${containerId} svg`);

    switch (mode) {
      case 'normal':
        // svg.style.display = 'block';
        stopAnimation(this.circleDOM);
        show(this.containerId);
        break;
      case 'animated':
        animated === 'yes'
          ? startAnimation(this.circleDOM, animationPeriod)
          : stopAnimation(this.circleDOM);
        break;
      case 'hidden':
        hide(this.containerId);
        break;
    }
  }
  // get circle DOM object
  get circleDOM() {
    const { containerId } = this;
    return document.querySelector(`#${containerId} .${outerCircleClass}`);
  }
}
// show method
function show(containerId) {
  const svg = document.querySelector(`#${containerId} svg`);
  scaleInOut(svg, 1000, 'in');
}
// hide method
function hide(containerId) {
  const svg = document.querySelector(`#${containerId} svg`);
  scaleInOut(svg, 1000, 'out');
}

// create circle as DOM element
function createCircle(type, value) {
  let circle = document.createElementNS(svgNS, 'circle');

  // git filled percantage based on current value
  let percentage = (100 - value) / 100 * circleLength;

  // adding default style
  circle.style.strokeDashoffset = 0;
  circle.style.transition = 'stroke-dashoffset .25s ease';
  circle.style.stroke = '#cccccc';
  circle.style.strokeWidth = '20px';
  circle.style.transformOrigin = 'center center';

  // adding svg attributes
  circle.setAttributeNS(null, 'cx', 100);
  circle.setAttributeNS(null, 'cy', 100);
  circle.setAttributeNS(null, 'r', radius);
  circle.setAttributeNS(null, 'stroke-dasharray', circleLength);
  circle.setAttributeNS(null, 'fill', 'transparent');
  circle.setAttributeNS(null, 'stroke-dashoffset', 100);

  // depending on inner circle or outer circle modifying attributes and style
  switch (type) {
    case 'inner':
      circle.setAttributeNS(
        null,
        'class',
        'progress-bar__circle progress-bar__circle--inner'
      );
      break;
    case 'outer':
      circle.setAttributeNS(
        null,
        'class',
        'progress-bar__circle progress-bar__circle--outer'
      );
      circle.style.stroke = '#ffdb4d';
      circle.style.strokeLinecap = 'round';
      circle.style.strokeDashoffset = percentage;
      break;
  }
  return circle;
}

// create svg method
function createSvg() {
  let svg = document.createElementNS(svgNS, 'svg');
  // setting SVG attributes
  svg.setAttributeNS(null, 'id', 'progress');
  svg.setAttributeNS(null, 'class', 'progress-bar');
  svg.setAttributeNS(null, 'width', '200');
  svg.setAttributeNS(null, 'height', '200');
  svg.setAttributeNS(null, 'version', '1.1');
  svg.setAttributeNS(null, 'viewPort', '0 0 100 100');

  // we need it to start from 12 o'clock
  // so rotate svg by 90 degress, because circle's stroke starts at 3 o'clock
  svg.style.transform = 'rotate(-90deg)';

  return svg;
}

// set reqId that needed for canceling animation
// reqId is updated every frame
let reqId = null;

// starting animation
function startAnimation(circle, period) {
  const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);
  let time = {
    start: performance.now(),
    total: period
  };

  const tick = now => {
    time.elapsed = now - time.start;
    const progress = getProgress(time);

    circle.style.transform = `rotate(${360 * progress}deg)`;
    if (progress == 1) time.start = now;
    reqId = requestAnimationFrame(tick);
  };

  reqId = requestAnimationFrame(tick);
}
// stop animation
function stopAnimation(circle) {
  circle.style.transform = `rotate(0deg)`;
  cancelAnimationFrame(reqId);
}

function scaleInOut(circle, period, direction) {
  const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);
  let time = {
    start: performance.now(),
    total: period
  };
  const easeOutElastic = progress =>
    Math.pow(2, -10 * progress) * Math.sin((progress - 0.1) * 5 * Math.PI) + 1;

  const tick = now => {
    time.elapsed = now - time.start;
    const progress = getProgress(time);
    const value = easeOutElastic(progress);
    if (direction === 'in') {
      circle.style.transform = `scale(${value})`;
    } else if (direction === 'out') {
      circle.style.transform = `scale(${1 - value})`;
    }
    if (progress == 1) return;
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

/** Export Progress class. */
export default Progress;
