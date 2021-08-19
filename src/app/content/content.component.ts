import { Component, HostListener, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { SkillsService } from '../services/skills.service';
import { FormService } from '../services/form.service';
import { SwitchService } from '../services/switch.service';
import { ThemeService } from '../services/theme.service';
declare let AOS: any;
declare var $: any;


@Component({
  selector: 'app-content',
  templateUrl: 'views/content.component.html',
  styleUrls: ['../app.component.css']
})


export class ContentComponent implements OnInit {

  title = 'angular-cv';
  skills: any = JSON.parse(JSON.stringify(this.skillsService.mySkills));
  experiences: any = JSON.parse(JSON.stringify(this.experienceService.myExperiences));
  experienceDescription: string = "";
  themeCpt: number = 0;
  langCpt: number = 0;

  public constructor(public skillsService: SkillsService, public themeService: ThemeService, public experienceService: ExperienceService, public formService: FormService, public switchService: SwitchService) {
  }

  ngOnInit(): void {
    AOS.init();
    $(".education-block").click(function () {
      $('.toast').toast('show');
    })
  }

  @HostListener('window:scroll', ['$event'])
  public reachSkills() {
    const skillYPos = this.getPos(document.querySelector("#skill-progress-bars")).y - 600;
    var scrollY = pageYOffset;
    let skill: any = []; for (var i = 0; i < this.skills.length; i++) {
      for (var j = 0; j < this.skills[i].data.length; j++) {
        skill[j] = this.skills[i].data[j].skill;
        this.skills[i].data[j].skill = (scrollY < skillYPos || skillYPos < 0) ? "0%" : this.skillsService.mySkills[i].data[j].skill;
      }
    }
  }


  public getPos(el: any) {
    for (var lx = 0, ly = 0;
      el != null;
      lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return { x: lx, y: ly };
  }


  public selectCard(event: any) {
    this.experiences.forEach((element: { activated: boolean; }) => {
      element.activated = false;
    });
    event.activated = true;
    this.experienceDescription = event.longdescription;
  }

  public displayArrow(event: any) {
    let element = event.target.childNodes[0].childNodes[2];
    element.classList.remove("cache");
  }

  public hideArrow(event: any) {
    let element = event.target.childNodes[0].childNodes[2];
    element.classList.add("cache");
  }

  public redirectTo(url: string) {
    window.open(url, '_blank');
  }

  public animateLinks(event: any) {
    event.target.classList.add("headShake");
  }

  public unanimateLinks(event: any) {
    event.target.classList.remove("headShake");
  }

  public switch(type: string) {
    switch (type) {
      case "THEME":
        this.themeCpt++;
        this.switchService.switchTheme(this.themeCpt);
        this.themeService.changeTheme(this.themeCpt);
        break;
      case "LANG":
        this.langCpt++;
        this.switchService.switchLang(this.langCpt);
        break;
      default:
        break;
    }
  }

  public enterPortfolioCard(event: any){
    this.displayArrow(event);
    this.blackAndWhite(event);
  }

  public leavePortfolioCard(event: any){
    this.hideArrow(event);
    this.colored(event);
  }

  public blackAndWhite(event: any){
    let element = event.target.childNodes[0].childNodes[0];
    console.log(element);
    element.classList.add("colored");
  }

  public colored(event: any) {
    let element = event.target.childNodes[0].childNodes[0];
    element.classList.remove("colored");
  }

}


