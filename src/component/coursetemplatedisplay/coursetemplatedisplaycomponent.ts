declare function require(name: string);
import $ from 'jquery';
import {CourseTemplate} from '../../model/coursetemplate';

export class CourseTemplateDisplayComponent extends HTMLElement {

  private courseTemplate: CourseTemplate;

  constructor(courseTemplate: CourseTemplate) {
    super();
    this.courseTemplate = courseTemplate;
  }

  public connectedCallback(): void {
    this.innerHTML = require('./coursetemplatedisplay-template.html');
  }

  public disconnectedCallback(): void {
  }

}

customElements.define("custom-coursetemplatedisplay",CourseTemplateDisplayComponent);