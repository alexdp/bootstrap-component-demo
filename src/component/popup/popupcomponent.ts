declare function require(name: string);
import $ from "jquery";

export class PopupComponent extends HTMLElement {

  
  public connectedCallback(): void {
    let self = this;
    this.innerHTML = require('./popup-template.html');
    $('#popup-savebutton').click(function() {
      self.save();
    });
  }

  public disconnectedCallback(): void {
  }

  public show(): void {
    $('#popup').modal('show');
  }

  private save(): void {
    console.log("saed!");
    $('#popup').modal('hide');
  }

}

customElements.define("custom-popup",PopupComponent);
