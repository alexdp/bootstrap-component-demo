declare function require(name: string);
import $ from 'jquery';
import {CourseTemplate} from '../../model/coursetemplate';

const HTMLtemplate = (courseTemplate: CourseTemplate) => require('./coursetemplatedisplay-tablink-template.html');

export class CourseTemplateDisplayTabLinkComponent extends HTMLElement {

  public courseid: number;
  public idnumber: string;
  public shortname: string;
  public summary: string;
  public thumbnail: string;

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

customElements.define("custom-coursetemplatedisplay",CourseTemplateDisplayComponent);