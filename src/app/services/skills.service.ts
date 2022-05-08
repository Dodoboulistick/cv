import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SkillsService {
    public constructor() {
    }

    mySkills: any = [
        {
          title: { img: "/assets/img/logo-html.png", name: "DOM" },
          data: [
            { lang: "HTML", skill: "90%", color: "#ef652a" },
            { lang: "CSS", skill: "85%", color: "#ef652a" },
            { lang: "Bootstrap", skill: "80%", color: "#ef652a" },
            { lang: "Material Design", skill: "60%", color: "#ef652a" }
          ]
        }, {
          title: { img: "/assets/img/logo-js.png", name: "Javascript" },
          data:
            [
              { lang: "Javascript", skill: "80%", color: "#f7e018" },
              { lang: "Angular", skill: "70%", color: "#f7e018" },
              { lang: "Vue", skill: "60%", color: "#f7e018" },
              { lang: "React", skill: "40%", color: "#f7e018" },
              { lang: "jQuery", skill: "60%", color: "#f7e018" },
              { lang: "ExpressJS/Sequelize", skill: "65%", color: "#f7e018" }
            ]
        }, {
          title: { img: "/assets/img/logo-php.png", name: "PHP/SQL" },
          data:
            [
              { lang: "PHP", skill: "80%", color: "#7486be" },
              { lang: "Laravel", skill: "70%", color: "#7486be" },
              { lang: "MySQL/PostreSQL", skill: "90%", color: "#7486be" }
            ]
        }, {
          title: { img: "/assets/img/logo-photoshop.png", name: "Design/CMS" },
          data:
            [
              { lang: "Photoshop", skill: "90%", color: "#00c8ff" },
              { lang: "Premiere Pro", skill: "50%", color: "#00c8ff" },
              { lang: "Wordpress", skill: "85%", color: "#00c8ff" }
            ]
        }
      ];


}
