import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: 'views/footer.component.html',
    styleUrls: ['../../app.component.css']
  })

export class FooterComponent {
    public constructor(){}

    year: Date = new Date();
}