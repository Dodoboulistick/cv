import { Component, HostListener, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { SkillsService } from '../services/skills.service';
import { FormService } from '../services/form.service';
import { SwitchService } from '../services/switch.service';
import { ThemeService } from '../services/theme.service';
import { TranslateService } from '@ngx-translate/core';
declare let AOS: any;


@Component({
  selector: 'app-content',
  templateUrl: 'views/content.component.html',
  styleUrls: ['../app.component.css']
})


export class ContentComponent implements OnInit {

  title = 'angular-cv';
  skills: any = JSON.parse(JSON.stringify(this.skillsService.mySkills));
  experiences: any = JSON.parse(JSON.stringify(this.experienceService.myExperiencesFR));
  experienceDescription: string = "";
  themeCpt: number = 0;
  langCpt: number = 0;

  public constructor(public translate: TranslateService, public skillsService: SkillsService, public themeService: ThemeService, public experienceService: ExperienceService, public formService: FormService, public switchService: SwitchService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
  }

  ngOnInit(): void {
    AOS.init();
    this.initateStorage();
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

  public switch(type: string, inital: boolean = false) {
    if(inital){
      this.switchService.switchTheme(this.themeCpt);
      this.themeService.changeTheme(this.themeCpt);
      this.switchService.switchLang(this.langCpt);
      this.switchLang();
    } else {
      switch (type) {
        case "THEME":
          this.themeCpt++;
          localStorage.removeItem('theme');
          localStorage.setItem('theme', this.themeCpt.toString());
          this.switchService.switchTheme(this.themeCpt);
          this.themeService.changeTheme(this.themeCpt);
          break;
        case "LANG":
          this.langCpt++;
          localStorage.removeItem('lang');
          localStorage.setItem('lang', this.langCpt.toString());
          this.switchService.switchLang(this.langCpt);
          this.switchLang();
          break;
        default:
          break;
      }
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
    element.classList.add("colored");
  }

  public colored(event: any) {
    let element = event.target.childNodes[0].childNodes[0];
    element.classList.remove("colored");
  }

  public switchLang() {
    (this.langCpt%2 == 0) ? (this.translate.use("fr"), this.experiences = JSON.parse(JSON.stringify(this.experienceService.myExperiencesFR))) : (this.translate.use("en"), this.experiences = JSON.parse(JSON.stringify(this.experienceService.myExperiencesEN)));
    this.experienceDescription = "";
  }

  public initateStorage(){
    let currentLang = localStorage.getItem('lang');
    let currentTheme = localStorage.getItem('theme');
    currentLang ? this.langCpt = Number(currentLang) : this.langCpt = 0;
    currentTheme ? this.themeCpt = Number(currentTheme) : this.themeCpt = 0;
    this.switch("THEME", true);
    console.log(Number(currentTheme)%2 == 0)
    this.switchService.darkTheme = Number(currentTheme)%2 != 0;
  }

}


