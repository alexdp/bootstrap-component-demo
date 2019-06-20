declare function require(name: string);
import $ from 'jquery';

export class DashboardComponent extends HTMLElement {

  
  public connectedCallback(): void {
    this.innerHTML = require('./dashboard-template.html');
  }

  public disconnectedCallback(): void {
  }



}

customElements.define("custom-dashboard",DashboardComponent);