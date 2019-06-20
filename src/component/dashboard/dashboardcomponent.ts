declare function require(name: string);
import $ from 'jquery';
import {MoodleService} from '../../service/moodleservice';
import {CourseTemplate} from '../../model/coursetemplate';
import {CourseTemplateDisplayComponent} from '../coursetemplatedisplay/coursetemplatedisplaycomponent';

export class DashboardComponent extends HTMLElement {

  private service : MoodleService = new MoodleService();
  
  public connectedCallback(): void {
    this.innerHTML = require('./dashboard-template.html');
    let result = this.service.getTemplates();
    result.then(function(courseTemplates : CourseTemplate[]) {
      console.log(courseTemplates);
    });
  }

  public disconnectedCallback(): void {
  }



}

customElements.define("custom-dashboard",DashboardComponent);