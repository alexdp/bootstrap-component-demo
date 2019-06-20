declare function require(name: string);
import $ from 'jquery';
import {MoodleService} from '../../service/moodleservice';
import {CourseTemplate} from '../../model/coursetemplate';
import {CourseTemplateDisplayTabLinkComponent} from '../coursetemplatedisplay/coursetemplatedisplaytablinkcomponent';

export class DashboardComponent extends HTMLElement {

  private service : MoodleService = new MoodleService();
  
  public connectedCallback(): void {
    let _self = this;
    this.innerHTML = require('./dashboard-template.html');
    let result = this.service.getTemplates();
    result.then(function(courseTemplates : CourseTemplate[]) {
      console.log(courseTemplates);
      for (let aCourseTemplate of courseTemplates) {
        let tabLink = new CourseTemplateDisplayTabLinkComponent(aCourseTemplate);
        _self.appendChild(tabLink);
      }
    });
  }

  public disconnectedCallback(): void {
  }



}

customElements.define("custom-dashboard",DashboardComponent);