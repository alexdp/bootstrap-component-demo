declare function require(name: string);
import {Modal} from 'bootstrap';

export class SampleFormComponent extends HTMLElement {

  
  public connectedCallback(): void {
    this.innerHTML = require('./sampleform-template.html');
    console.log("A car was added to the DOM");
  }

  public disconnectedCallback(): void {
    console.log("hey! someone removed me from the DOM!");
  }

  public show() : void {
    let popup : Modal = <Modal>this.getElementsByClassName('modal');
    popup.show();
  }

}

customElements.define("custom-modal",SampleFormComponent);
