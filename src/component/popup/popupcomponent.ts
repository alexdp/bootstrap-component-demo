declare function require(name: string);
import $ from "jquery";

export class PopupComponent extends HTMLElement {

  
  public connectedCallback(): void {
    this.innerHTML = require('./popup-template.html');
  }

  public disconnectedCallback(): void {
  }

  public show() : void {
    $('#popup').modal('"show');
  }

}

customElements.define("custom-popup",PopupComponent);
