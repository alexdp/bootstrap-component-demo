declare function require(name: string);
import $ from 'jquery';
import {DashboardComponent} from '../dashboard/dashboardcomponent';

export class PopupComponent extends HTMLElement {

  
  public connectedCallback(): void {
    let self = this;
    this.outerHTML = require('./popup-template.html');
    $('#popup-createbutton').click(function() {
      self.save();
    });
    this.injectDashboard();
  }

  public disconnectedCallback(): void {
  }

  public show(): void {
    $('#popup').modal('show');
  }

  private save(): void {
    console.log("saved!");
    $('#popup').modal('hide');
  }

  private injectDashboard(): void {
    let dashboard = new DashboardComponent();
    let content = $('#popup-content');
    content.empty();
    content.append(new DashboardComponent());
  }

}

customElements.define("custom-popup",PopupComponent);
