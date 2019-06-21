declare function require(name: string);
import $ from 'jquery';
import {MoodleService} from '../../service/moodleservice';
import {CourseTemplate} from '../../model/coursetemplate';
import {CourseTemplateDisplayTabLinkComponent} from '../coursetemplatedisplay/coursetemplatedisplaytablinkcomponent';
import {CourseTemplateDisplayTabContentComponent} from '../coursetemplatedisplay/coursetemplatedisplaytabcontentcomponent';
import { EventUtil } from '../../service/eventutil';

export class DashboardComponent extends HTMLElement {

  private service : MoodleService = new MoodleService();

  private selectedCourseTemplate: CourseTemplate;
  
  public connectedCallback(): void {
    let _self = this;
    this.outerHTML = require('./dashboard-template.html');
    let result = this.service.getTemplates();
    result.then(function(courseTemplates : CourseTemplate[]) {
      console.log(courseTemplates);
      for (let aCourseTemplate of courseTemplates) {
        let tabLink = new CourseTemplateDisplayTabLinkComponent(aCourseTemplate, (selectedCourseTemplate) => _self.selectCourseTemplate(selectedCourseTemplate));
        $('#v-pills-tab').append(tabLink);
        let tabContent = new CourseTemplateDisplayTabContentComponent(aCourseTemplate);
        $('#v-pills-tabContent').append(tabContent);
      }
    });
    EventUtil.subscribe("custom-event", (e, data) => _self.createCourse());
  }

  private createCourse(): void {
    if (this.selectedCourseTemplate == undefined) {
      return;
    }
    console.log(this.selectedCourseTemplate );
    $('#popup').modal('hide');
  }

  private selectCourseTemplate(selectedCourseTemplate: CourseTemplate): void {
    this.selectedCourseTemplate = selectedCourseTemplate;
    $('#popup-createbutton').removeAttr("disabled");
  }


  public disconnectedCallback(): void {
  }



}

customElements.define("custom-dashboard",DashboardComponent);