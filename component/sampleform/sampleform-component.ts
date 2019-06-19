declare function require(name: string);
import {Modal} from 'boostrap';

export class SampleFormComponent extends HTMLElement {

  
  public connectedCallback(): void {
    this.innerHTML = require('./sampleform-template.html');
    console.log("A car was added to the DOM");
  }

  public disconnectedCallback(): void {
    console.log("hey! someone removed me from the DOM!");
  }

  public show() : void {
    this.getElementsByClassName('modal').modal("show")
    $('#myModal').modal('show')
  }

}

customElements.define("dasshboard",SampleFormComponent);
