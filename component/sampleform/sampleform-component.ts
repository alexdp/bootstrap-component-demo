
import template from 'sampleform-template.html!text';

export class SampleFormComponent {

  

  parent : HTMLElement;

  constructor(parent : HTMLElement) {
    this.parent = parent;
    this.init();
  }

  private init() : void {

  }

}