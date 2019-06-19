

export class SampleFormComponent {

  

  parent : HTMLElement;

  constructor(parent : HTMLElement) {
    this.parent = parent;
    this.init();
  }

  private init() : void {
    const template = require('./sampleform-template.html');
    this.parent.innerHTML = template;
  }

}