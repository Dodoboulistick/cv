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
      data_1 : [
        { lang : "HTML", skill : "90%"}, 
        { lang : "CSS", skill : "85%"}, 
        { lang : "Bootstrap", skill : "80%"}, 
        { lang : "Material Design", skill : "60%"}
      ],
      data_2 : [
        { lang : "Javascript", skill : "80%"}, 
        { lang : "Angular", skill : "70%"}, 
        { lang : "React", skill : "50%"}, 
        { lang : "jQuery", skill : "60%"}, 
        { lang : "ExpressJS/Sequelize", skill : "65%"}
      ]
    },
    {
      title_1 : { img : "/assets/img/logo-php.png", name : "PHP/SQL" },
      title_2 : { img : "/assets/img/logo-photoshop.png", name : "Design et CMS" },
      data_1 : [
        { lang : "PHP", skill : "80%"}, 
        { lang : "Laravel", skill : "70%"}, 
        { lang : "MySQL/PostreSQL", skill : "90%"}
      ],
      data_2 : [
        { lang : "Photoshop", skill : "90%"}, 
        { lang : "Premiere Pro", skill : "50%"}, 
        { lang : "Wordpress", skill : "85%"}
      ]
    }
  ];

  

}


