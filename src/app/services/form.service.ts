import { Injectable } from '@angular/core';
declare let Email: any;

@Injectable({
    providedIn: 'root'
})

export class FormService {
    public constructor() {
    }

    firstname: string = "";
    name: string = "";
    email: string = "";
    phone: string = "";
    message: string = "";
    firstnameError: string = "";
    nameError: string = "";
    emailError: string = "";
    messageError: string = "";
    formSuccess: string = "";


    public verifyInputs(): boolean {
        let result: boolean = true;
        if (!this.firstname) this.firstnameError = "Vous devez renseigner un prénom", this.firstname = "", result = false;
        if (!this.name) this.nameError = "Vous devez renseigner un nom", this.name = "", result = false;
        if (!this.message) this.messageError = "Votre message est vide", this.message = "", result = false;
        if (!this.validateEmail(this.email)) this.emailError = "Votre mail n'est pas valide", this.email = "", result = false;
        return result;
    }

    public validateEmail(input: string) {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return input.match(validRegex);
    }

    public resetInputs() {
        this.firstnameError = "";
        this.nameError = "";
        this.emailError = "";
        this.messageError = "";
    }

    public resetAllInputs() {
        this.firstname = "";
        this.name = "";
        this.email = "";
        this.message = "";
        this.phone = "";
        this.resetInputs();
    }

    public onSubmit() {
        this.resetInputs();
        this.verifyInputs();
        let CONFIG = require('../../../smtp.config.json');
        if (this.verifyInputs()) {
            Email.send({
                SecureToken: CONFIG.SecureToken,
                To: "dorian.mailhe@gmail.com",
                From: "contact@dodobwebsite.fr",
                Subject: "Un nouveau message sur CV",
                Body: `
                  Prénom : ${this.firstname}<br />
                  Nom : ${this.name}<br />
                  Mail : ${this.email}<br />
                  Téléphone : ${this.phone || "Non renseigné"}<br />
                  Message : ${this.message}<br />
                `
            }).then(
                this.resetAllInputs(),
                this.formSuccess = "Merci! Votre message a bien été envoyé.",
                setInterval(() => {
                    this.formSuccess = "";
                  }, 3000)
                
            );

        }
    }
}