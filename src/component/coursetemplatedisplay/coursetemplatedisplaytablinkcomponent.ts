declare function require(name: string);
import $ from 'jquery';
import {CourseTemplate} from '../../model/coursetemplate';

export class CourseTemplateDisplayTabLinkComponent extends HTMLElement {

  private courseTemplate: CourseTemplate;

  constructor(courseTemplate: CourseTemplate) {
    super();
    this.courseTemplate = courseTemplate;
  }

  public connectedCallback(): void {
    this.innerHTML = eval('`' + require('./coursetemplatedisplay-tablink-template.html') + '`');
  }

  public disconnectedCallback(): void {
  }

}

customElements.define("custom-coursetemplatedisplay-tablink",CourseTemplateDisplayTabLinkComponent);