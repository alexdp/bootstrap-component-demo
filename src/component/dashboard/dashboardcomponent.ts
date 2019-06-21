declare function require(name: string);
import $ from 'jquery';
import {MoodleService} from '../../service/moodleservice';
import {CourseTemplate} from '../../model/coursetemplate';
import {CourseTemplateDisplayTabLinkComponent} from '../coursetemplatedisplay/coursetemplatedisplaytablinkcomponent';
import {CourseTemplateDisplayTabContentComponent} from '../coursetemplatedisplay/coursetemplatedisplaytabcontentcomponent';
import { EventUtil } from '../../service/eventutil';

export class DashboardComponent extends HTMLElement {

  private service : MoodleService = new MoodleService();
  
  public connectedCallback(): void {
    let _self = this;
    this.outerHTML = require('./dashboard-template.html');
    let result = this.service.getTemplates();
    result.then(function(courseTemplates : CourseTemplate[]) {
      console.log(courseTemplates);
      for (let aCourseTemplate of courseTemplates) {
        let tabLink = new CourseTemplateDisplayTabLinkComponent(aCourseTemplate);
        $('#v-pills-tab').append(tabLink);
        let tabContent = new CourseTemplateDisplayTabContentComponent(aCourseTemplate);
        $('#v-pills-tabContent').append(tabContent);
      }
    });
    EventUtil.subscribe("custom-event", (e, data) => $('#popup').modal('hide'));
  }

  public disconnectedCallback(): void {
  }



}

customElements.define("custom-dashboard",DashboardComponent);