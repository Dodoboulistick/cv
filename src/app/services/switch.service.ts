import { Injectable } from '@angular/core';
import { ThemeService } from './theme.service';

@Injectable({
    providedIn: 'root'
})

export class SwitchService {
    public constructor() {
    }

    themeIcon: string = "bi bi-brightness-high-fill";
    langIcon: string = "fr.svg";

    darkTheme: boolean = false;

    public switchTheme(index: number){
        index%2 == 0 ? (this.themeIcon = "bi bi-brightness-high-fill", this.darkTheme = false) : (this.themeIcon = "bi bi-moon", this.darkTheme = true);
    }

    public switchLang(index: number){
        index%2 == 0 ?  this.langIcon = "fr.svg" :  this.langIcon = "gb.svg";
    }
    
}