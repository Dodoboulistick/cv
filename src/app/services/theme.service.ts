import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ThemeService {
    
    whiteThemeWhite: string = "#fff";
    whiteThemeGrey: string = "#ddd";
    whiteThemeBlack: string = "#212529";

    lightColor: string;
    greyColor: string;
    darkColor: string;

    public constructor() {
        this.lightColor = this.whiteThemeWhite;
        this.greyColor = this.whiteThemeGrey;
        this.darkColor = this.whiteThemeBlack;
    }

    public initColors(){
        this.lightColor = this.whiteThemeWhite;
        this.greyColor = this.whiteThemeGrey;
        this.darkColor = this.whiteThemeBlack;
    }

    public changeTheme(i: number){
        if(i%2 == 0){
            this.lightColor = this.whiteThemeWhite;
            this.greyColor = this.whiteThemeGrey;
            this.darkColor = this.whiteThemeBlack;
        } else {
            this.lightColor = this.whiteThemeBlack;
            this.greyColor = "#131516";
            this.darkColor = "#ddd";
        }
    }

    
    
}