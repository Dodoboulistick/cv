import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: 'views/app.component.html',
  styleUrls: ['../app.component.css']
})
export class AppComponent {
  title = 'Dorian Mailhé';

  public constructor(public themeService: ThemeService, public switchService: SwitchService){
  }
}
