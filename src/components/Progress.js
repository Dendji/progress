const svgNS = 'http://www.w3.org/2000/svg';

// detect empty parameters in functions
const required = () => {
  throw new Error('Progress component is missing parameter');
};
class Progress {
  // initializing properties in constructor
  // if containerId is empty then throw an Error
  constructor(containerId = required(), value = 10, mode = 'normal') {
    this.containerId = containerId;
    this.value = value;
    this.mode = mode;
    this.radius = 90;
    this.circleLength = this.radius * Math.PI * 2;
    this.svgId = 'progress';
    this.outerCircleClass = 'progress-bar__circle--outer';

    this.init();
  }
  init() {
    // creating progress bar and appending to DOM
    let container = document.getElementById(this.containerId);
    let svg = this.createSvg();
    let innerCircle = this.createCircle('inner');
    let outerCircle = this.createCircle('outer');

    svg.appendChild(innerCircle);
    svg.appendChild(outerCircle);
    container.appendChild(svg);
  }
  // set mode method
  setMod(mode = 'normal', animated = '') {
    const { containerId } = this;
    const svg = document.querySelector(`#${containerId} svg`);
    switch (mode) {
      case 'normal':
        svg.style.display = 'block';
        this.animate(false);
        break;
      case 'animated':
        this.animate(animated);
        break;
      case 'hidden':
        this.hide();
        break;
    }
  }
  hide() {
    const { containerId } = this;
    const svg = document.querySelector(`#${containerId} svg`);
    svg.style.display = 'none';
  }
  // start and stop animation method
  getCircleDOM() {
    const { containerId, outerCircleClass } = this;
    return document.querySelector(`#${containerId} .${outerCircleClass}`);
  }
  animate(state) {
    const { containerId } = this;
    const circle = this.getCircleDOM();

    if (state === 'yes') {
      animateRequest(function(timePassed) {
        circle.style.transform = `rotate(${timePassed / 5}deg)`;
      });
    } else {
      animateRequest(function(timePassed) {
        circle.style.transform = `rotate(${timePassed / 5}deg)`;
      }, 0);
    }
  }
  setValue(value = 0) {
    const circle = this.getCircleDOM();
    const { radius, circleLength } = this;
    // get percentage from circle length
    const percentage = (100 - value) / 100 * circleLength;

    circle.style.strokeDashoffset = percentage;

    // change state
    this.value = value;
  }
  createCircle(type) {
    let circle = document.createElementNS(svgNS, 'circle');
    let { value, radius, circleLength } = this;
    let pct = (100 - value) / 100 * circleLength;

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
        circle.style.strokeDashoffset = pct;
        break;
    }
    return circle;
  }
  // create svg wrapper method
  createSvg() {
    let svg = document.createElementNS(svgNS, 'svg');
    // setting SVG attributes
    svg.setAttributeNS(null, 'id', 'progress');
    svg.setAttributeNS(null, 'class', 'progress-bar');
    svg.setAttributeNS(null, 'width', '200');
    svg.setAttributeNS(null, 'height', '200');
    svg.setAttributeNS(null, 'version', '1.1');
    svg.setAttributeNS(null, 'viewPort', '0 0 100 100');

    // we need it to start from 12 o'clock
    // so rotate svg by 90 degress, because SVG's stroke starts at 3 o'clock
    svg.style.transform = 'rotate(-90deg)';

    return svg;
  }
}
// request animation helper
function animateRequest(draw, duration) {
  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    var timePassed = time - start;

    if (timePassed > duration) timePassed = duration;

    draw(timePassed);

    // if (timePassed < duration) {
    requestAnimationFrame(animate);
    // }
  });
}
export default Progress;
