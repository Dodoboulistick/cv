import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'app-footer',
    templateUrl: 'views/footer.component.html',
    styleUrls: ['../../app.component.css']
  })

export class FooterComponent {
    public constructor(public themeService: ThemeService, public switchService: SwitchService){}

    year: Date = new Date();
}