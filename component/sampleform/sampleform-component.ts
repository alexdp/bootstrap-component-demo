declare function require(name: string);


export class SampleFormComponent extends HTMLElement {

  
  public connectedCallback(): void {
    this.innerHTML = require('./sampleform-template.html');
    console.log("A car was added to the DOM");
  }

  public disconnectedCallback(): void {
    console.log("hey! someone removed me from the DOM!");
  }



}

customElements.define("f-btn",SampleFormComponent);
