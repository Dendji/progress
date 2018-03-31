const svgNS = 'http://www.w3.org/2000/svg';
const required = () => {
  throw new Error('Progress component is missing parameter');
};

class Progress {
  constructor(containerId = required(), value = 10, mode = 'normal') {
    this.containerId = containerId;
    this.value = value;
    this.mode = mode;
    this.radius = 90;
    this.circleLength = this.radius * Math.PI * 2;

    this.init();
  }
  init() {
    let container = document.getElementById(this.containerId);
    let svg = this.createSvg();
    let innerCircle = this.createCircle('inner');
    let outerCircle = this.createCircle('outer');

    svg.appendChild(innerCircle);
    svg.appendChild(outerCircle);
    container.appendChild(svg);
  }
  setMod(mode = 'normal', animated = '') {
    const { containerId } = this;
    const svg = document.querySelector(`#${containerId} svg`);
    switch (mode) {
      case 'normal':
        svg.style.display = 'block';
        this.animate(false);
        break;
      case 'animated':
        this.animate(true);
        break;
      case 'hidden':
        this.hide();
        break;
    }
    console.info(`Mode: ${mode}. Animated: ${animated} `);
  }

  animate(state) {
    const { containerId } = this;
    const circle = document.querySelector(
      `#${containerId} .progress-bar__circle--outer`
    );

    if (state) {
      animateRequest(function(timePassed) {
        circle.style.transform = `rotate(${timePassed / 5}deg)`;
      });
    } else {
      animateRequest(function(timePassed) {
        circle.style.transform = `rotate(${timePassed / 5}deg)`;
      }, 0);
    }
  }
  hide() {
    const { containerId } = this;
    const svg = document.querySelector(`#${containerId} svg`);
    svg.style.display = 'none';
  }
  setValue(value = 0) {
    console.info(`Value: ${value}`);
    this.value = value;
    let { containerId } = this;
    const circle = document.querySelector(
      `#${containerId} .progress-bar__circle--outer`
    );
    const radius = this.radius;
    const circleLength = this.circleLength;

    let pct = (100 - value) / 100 * circleLength;

    circle.style.strokeDashoffset = pct;
  }
  createCircle(type) {
    let circle = document.createElementNS(svgNS, 'circle');
    let { value, radius, circleLength } = this;
    let pct = (100 - value) / 100 * circleLength;
    circle.setAttributeNS(null, 'cx', 100);
    circle.setAttributeNS(null, 'cy', 100);
    circle.setAttributeNS(null, 'r', radius);
    circle.setAttributeNS(null, 'stroke-dasharray', circleLength);
    circle.setAttributeNS(null, 'fill', 'transparent');
    circle.setAttributeNS(null, 'stroke-dashoffset', 100);

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
        circle.style.strokeDashoffset = pct;
        break;
    }

    return circle;
  }

  createSvg() {
    let svg = document.createElementNS(svgNS, 'svg');
    svg.setAttributeNS(null, 'id', 'progress');
    svg.setAttributeNS(null, 'class', 'progress-bar');
    svg.setAttributeNS(null, 'width', '200');
    svg.setAttributeNS(null, 'height', '200');
    svg.setAttributeNS(null, 'version', '1.1');
    svg.setAttributeNS(null, 'viewPort', '0 0 100 100');
    return svg;
  }
}
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
