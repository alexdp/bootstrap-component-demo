import $ from 'jquery';

export class MoodleService {



  private token: string = "76d4aa5f0e891787a1f9cdba83e11851";
  private baseUrl: string = "https://essec-uat.enovation.ie";
  private templateEndPoints: string = `${this.baseUrl}/webservice/rest/server.php?wstoken=${this.token}&wsfunction=local_essecws_getcoursetemplates&moodlewsrestformat=json`;

  public getTemplates(): void {
    $.ajax({
      type: 'POST',
      url: this.templateEndPoints,
      data: 'parameters[categoryid]=1',
      dataType: 'json',
      success: (data) => {
        console.log(data)
      }
    });
  }

}