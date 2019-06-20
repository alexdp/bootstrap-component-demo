declare function require(name: string);
import $ from 'jquery';
import {CourseTemplate} from '../../model/coursetemplate';

export class CourseTemplateDisplayComponent extends HTMLElement {

  public courseid: number;
  public idnumber: string;
  public shortname: string;
  public summary: string;
  public thumbnail: string;

  private courseTemplate: CourseTemplate;
  private const Item = (courseTemplate: CourseTemplate) => `
  <a href="${courseTemplate.iurl}" class="list-group-item">
    <div class="image">
      <img src="${img}" />
    </div>
    <p class="list-group-item-text">${title}</p>
  </a>
`;

  constructor(courseTemplate: CourseTemplate) {
    super();
    this.courseTemplate = courseTemplate;
  }

$('.list-items').html([
  { url: '/foo', img: 'foo.png', title: 'Foo item' },
  { url: '/bar', img: 'bar.png', title: 'Bar item' },
].map(Item).join(''));


  public connectedCallback(): void {
    this.innerHTML = require('./coursetemplatedisplay-template.html');
  }

  public disconnectedCallback(): void {
  }

}

customElements.define("custom-coursetemplatedisplay",CourseTemplateDisplayComponent);