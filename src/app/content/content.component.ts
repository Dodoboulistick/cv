import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: 'views/content.component.html',
  styleUrls: ['../app.component.css']
})
export class ContentComponent {
  title = 'angular-cv';

  public constructor(){
  }

  skills : any = [
    {
      title_1 : { img : "/assets/img/logo-html.png", name : "DOM" },
      title_2 : { img : "/assets/img/logo-js.png", name : "Javascript" },
      data_1 : ["HTML", "CSS", "Bootstrap", "Material Design"],
      data_2 : ["Javascript", "Angular", "React", "jQuery", "ExpressJS/Sequelize"]
    },
    {
      title_1 : { img : "/assets/img/logo-php.png", name : "PHP/SQL" },
      title_2 : { img : "/assets/img/logo-photoshop.png", name : "Design et CMS" },
      data_1 : ["PHP", "Laravel", "MySQL/PostreSQL"],
      data_2 : ["Photoshop", "Premiere Pro", "Wordpress"]
    }
  ]

}


