import $ from 'jquery';

export class MoodleService {

  private token: string = "a18c33f51122e3772c9d3574b80e35cd";
  private getTemplateEndPoints: string = "local_essecws_getcoursetemplates";


  public getTemplates(): void {
    $.ajax({
      url: 'https://api.github.com/users',
      dataType: 'jsonp',
      username: 'toto',
      password: 'verysecured',
      success: (data) => {
        console.log(data)
      }
    });
  }

}