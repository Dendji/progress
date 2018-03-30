const svgNS = 'http://www.w3.org/2000/svg';

class Progress {
  constructor(containerId, value = 10, mode = 'normal') {
    this.containerId = containerId;
    this.init();
    this.value = value;
    this.mode = mode;
  }
  init() {
    let container = document.getElementById(this.containerId);
    let svg = this.createSvg();
    let innerCircle = this.createCircle();
    let outerCircle = this.createOuterCircle();
    svg.appendChild(innerCircle);
    svg.appendChild(outerCircle);
    container.appendChild(svg);
  }
  setMod(mode = 'normal', animated = '') {
    console.info(`Mode: ${mode}. Animated: ${animated} `);
  }
  setValue(value = 0) {
    console.info(`Value: ${value}`);
    this.value = value;
  }
  createCircle() {
    let innerCircle = document.createElementNS(svgNS, 'circle');
    innerCircle.setAttributeNS(
      null,
      'class',
      'progress-bar__circle progress-bar__circle--inner'
    );
    innerCircle.setAttributeNS(null, 'cx', 100);
    innerCircle.setAttributeNS(null, 'cy', 100);
    innerCircle.setAttributeNS(null, 'r', 90);
    innerCircle.setAttributeNS(null, 'fill', 'transparent');
    innerCircle.setAttributeNS(null, 'stroke-dasharray', 565);
    innerCircle.setAttributeNS(null, 'stroke-dashoffset', 0);
    return innerCircle;
  }
  createOuterCircle() {
    let outerCircle = document.createElementNS(svgNS, 'circle');
    outerCircle.setAttributeNS(
      null,
      'class',
      'progress-bar__circle progress-bar__circle--outer'
    );
    outerCircle.setAttributeNS(null, 'cx', 100);
    outerCircle.setAttributeNS(null, 'cy', 100);
    outerCircle.setAttributeNS(null, 'r', 90);
    outerCircle.setAttributeNS(null, 'fill', 'transparent');
    outerCircle.setAttributeNS(null, 'stroke-dasharray', 300);
    outerCircle.setAttributeNS(null, 'stroke-dashoffset', 0);
    return outerCircle;
  }
  createSvg() {
    let svg = document.createElementNS(svgNS, 'svg');
    svg.setAttributeNS(null, 'class', 'progress-bar');
    svg.setAttributeNS(null, 'width', '200');
    svg.setAttributeNS(null, 'height', '200');
    svg.setAttributeNS(null, 'version', '1.1');
    svg.setAttributeNS(null, 'viewPort', '0 0 100 100');
    return svg;
  }
}

export default Progress;
