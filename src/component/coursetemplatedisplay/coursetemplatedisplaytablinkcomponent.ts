declare function require(name: string);
import $ from 'jquery';
import {CourseTemplate} from '../../model/coursetemplate';

const HTMLtemplate = (courseTemplate: CourseTemplate) => eval('`' + require('./coursetemplatedisplay-tablink-template.html') + '`');

export class CourseTemplateDisplayTabLinkComponent extends HTMLElement {

  private courseTemplate: CourseTemplate;

  constructor(courseTemplate: CourseTemplate) {
    super();
    this.courseTemplate = courseTemplate;
  }

  public connectedCallback(): void {
    this.innerHTML = HTMLtemplate.apply(this.courseTemplate);
  }

  public disconnectedCallback(): void {
  }

}

customElements.define("custom-coursetemplatedisplay-tablink",CourseTemplateDisplayTabLinkComponent);