import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'app-navbar',
    templateUrl: 'views/navbar.component.html',
    styleUrls: ['../../app.component.css']
  })

export class NavbarComponent implements OnInit{
  public constructor(public themeService: ThemeService, public switchService: SwitchService){

  }
  ngOnInit(): void {
    this.themeService.initColors();
  }
}