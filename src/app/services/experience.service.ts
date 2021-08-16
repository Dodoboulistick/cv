import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ExperienceService {
    public constructor() {
    }

    public getDate(): number{
        let date: Date = new Date();
        return date.getFullYear();
    }

    myExperiences: any = [
        {
            company: "TotalEnergies",
            duration: `2021`,
            shortdescription: `Stage de 4 mois chez Total (devenu TotalEnergies). 
            Développement d'outils géophysiques avec Angular, ainsi qu'un espace membre avec Expressjs/Sequelize.`,
            longdescription: `J'ai été embauché par le club AVO de Total pour la refonte de certains outils obsolètes.
            En effet, les géophysiciens de l'équipe utilisaient des outils informatiques qui facilitaient leurs calculs.
            Malheureuement, ces outils étaient en Java et disponibles sur Internet Explorer, navigateur lui-même abandonné à son sort.
            L'enjeu était donc de donner une nouvelle vie à ces programmes dans un langage plus actuel.
            Le stage s'est merveilleusement bien passé et m'a beaucoup appris, d'un point de vue informatique ou physique.
            Il m'a également conforté dans l'idée de continuer dans cette voie.`,
            logo: "/assets/img/total.png",
            activated: true,
            lang: "Angular, Material, ExpressJS, Sequelize, PostgreSQL"
        },
        {
            company: "Projet Democratia",
            duration: `2021`,
            shortdescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aliquam quis elit nibh. Quisque pretium tortor ac ipsum ornare auctor. 
            Pellentesque in consequat eros. Ut facilisis imperdiet mi, vel luctus ante porta ac`,
            longdescription: `Projet Democratia est une association d'étudiants de la France entière qui a pour but de réintéresser les
            jeunes aux enjeux politiques actuels, et ainsi lutter contre l'abstention grandissante.
            J'ai été ajouté au projet dans l'équipe de développeurs du site, d'abord pour regarder le code, puis pour pleinement y 
            prendre part.
            C'est le projet qui m'a le plus appris en terme de travail en équipe, avec l'utilisation d'outils tels que Jira et Git.`,
            logo: "/assets/img/projetdemocratia.png",
            activated: false,
            lang: "React, Bootstrap, ExpressJS, Sequelize"
        },
        {
            company: "Développeur web Freelance",
            duration: `2015-${this.getDate()}`,
            shortdescription: `Suivi de nombreuses formations pour devenir développeur web Full Stack, notamment via les plateformes Udemy et OpenClassroom.
            Fort dévouement personnel à l'idée d'évoluer dans cette carrière.`,
            longdescription: `Si le domaine de l'informatique m'a très tôt interessé, c'est sur le développement web que j'ai jeté mon dévolu.
            Mes premières bribes de sites web remontent à mon stage de découverte de 3ème, que j'ai fait chez SII Sud-Ouest à Toulouse.
            S'en sont suivies de nombreuses formations et heures de travail pour m'améliorer. J'ai rapidement fait des sites pour mes proches, 
            souvent avec des CMS pour des raisons de professionnalisme, en cultivant ma passion pour les langages du web à côté.
            Afin de m'officialiser, j'ai voulu acquérir le titre d'auto-entrepreneur à 16ans. Malheureusement, l'âge rend le côté administratif 
            très compliqué. J'ai donc attendu mes 20ans, après ma prépa, pour obtenir le titre de micro-entrepreneur.
            Je cherche donc des missions à exercer comme freelance en parallèle de mes années d'école d'ingénieur.
            `,
            logo: "/assets/img/freelance.png",
            activated: false,
            lang: "Full stack"
        }
    ];


}