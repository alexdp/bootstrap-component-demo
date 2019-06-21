declare function require(name: string);
import $ from 'jquery';
import {CourseTemplate} from '../../model/coursetemplate';

type SelectionCallbackFunction = (aCourseTemplate: CourseTemplate) => void;

export class CourseTemplateDisplayTabLinkComponent extends HTMLElement {

  private courseTemplate: CourseTemplate;
  private callback: SelectionCallbackFunction;

  constructor(courseTemplate: CourseTemplate, callback: SelectionCallbackFunction) {
    super();
    this.courseTemplate = courseTemplate;
    this.callback = callback;
  }

  public connectedCallback(): void {
    this.outerHTML = eval('`' + require('./coursetemplatedisplay-tablink-template.html') + '`');
    $("#v-pills-" + this.courseTemplate.courseid + "-tab").on("click", (e:Event) => this.callback(this.courseTemplate));
  }

  public disconnectedCallback(): void {
  }

}

customElements.define("custom-coursetemplatedisplay-tablink",CourseTemplateDisplayTabLinkComponent);