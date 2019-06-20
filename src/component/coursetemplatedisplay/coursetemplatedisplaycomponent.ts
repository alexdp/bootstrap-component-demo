declare function require(name: string);
import $ from 'jquery';
import {CourseTemplate} from '../../model/coursetemplate';

export class CourseTemplateDisplayComponent {

  private courseTemplate: CourseTemplate;

  constructor(courseTemplate: CourseTemplate) {
    this.courseTemplate = courseTemplate;
  }

}

customElements.define("custom-dashboard",CourseTemplateDisplayComponent);