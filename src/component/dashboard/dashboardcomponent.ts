declare function require(name: string);
import $ from 'jquery';
import {MoodleService} from '../../service/moodleservice';

export class DashboardComponent extends HTMLElement {

  private service : MoodleService = new MoodleService();
  
  public connectedCallback(): void {
    this.innerHTML = require('./dashboard-template.html');
    this.service.getTemplates();
  }

  public disconnectedCallback(): void {
  }



}

customElements.define("custom-dashboard",DashboardComponent);