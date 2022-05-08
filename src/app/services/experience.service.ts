import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  public constructor() {}

  public getDate(): number {
    let date: Date = new Date();
    return date.getFullYear();
  }

  myExperiencesFR: any = [
    {
      company: 'ScribeLabs',
      duration: `2022`,
      location: 'Londres, Royaume-Uni',
      shortdescription: `Stage de 4 mois chez ScribeLabs.
            Refonte du site web et de la plateforme interne de l'entreprise avec Vuejs et Quasar.`,
      longdescription: `Dans le cadre de mon stage à l'étranger, j'ai été recruté par la startup ScribeLabs, qui fait de l'automatisation de données pour banques et entreprises.
      Dans un premier temps, j'ai été chargé de refaire le site web de l'entreprise, avec un simple serveur Nodejs et TailwindCSS.
      Dans un second temps, j'ai travaillé sur la plateforme client, sur des éléments d'UI/UX. Cela s'est fait en Vue3, avec Quasar.
      J'ai aussi du utiliser des services d'AWS et découvert GraphQL.
      `,
      logo: '/assets/img/scribe-logo.png',
      activated: true,
      lang: 'Vue3, Quasar, TailWindCSS, AWS, GraphQL',
    },
    {
      company: 'TotalEnergies',
      duration: `2021`,
      location: 'Pau, France',
      shortdescription: `Stage de 3 mois chez Total (devenu TotalEnergies).
            Développement d'outils géophysiques avec Angular, ainsi qu'un espace membre avec Expressjs/Sequelize.`,
      longdescription: `J'ai été embauché par le club AVO de Total pour la refonte de certains outils obsolètes.
            En effet, les géophysiciens de l'équipe utilisaient des outils informatiques qui facilitaient leurs calculs.
            Malheureuement, ces outils étaient en Java et disponibles sur Internet Explorer, navigateur lui-même abandonné à son sort.
            L'enjeu était donc de donner une nouvelle vie à ces programmes dans un langage plus actuel.
            Le stage s'est merveilleusement bien passé et m'a beaucoup appris, d'un point de vue informatique ou physique.
            Il m'a également conforté dans l'idée de continuer dans cette voie.`,
      logo: '/assets/img/total.png',
      activated: false,
      lang: 'Angular, Material, ExpressJS, Sequelize, PostgreSQL',
    },
    {
      company: 'Projet Democratia',
      duration: `2021`,
      location: 'Remote, France',
      shortdescription: `Conception d'un site de présentation et blog pour l'association Projet Démocratia, le tout en équipe.`,
      longdescription: `Projet Democratia est une association d'étudiants de la France entière qui a pour but de réintéresser les
            jeunes aux enjeux politiques actuels, et ainsi lutter contre l'abstention grandissante.
            J'ai été ajouté au projet dans l'équipe de développeurs du site, d'abord pour regarder le code, puis pour pleinement y
            prendre part.
            C'est le projet qui m'a le plus appris en terme de travail en équipe, avec l'utilisation d'outils tels que Jira et Git.`,
      logo: '/assets/img/projetdemocratia.png',
      activated: false,
      lang: 'React, Bootstrap, ExpressJS, Sequelize',
    },
    {
      company: 'Freelance',
      duration: `2015-${this.getDate()}`,
      location: 'Toulouse/Pau, France',
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
      logo: '/assets/img/freelance.png',
      activated: false,
      lang: 'Full stack',
    },
  ];

  myExperiencesEN: any = [
    {
      company: 'ScribeLabs',
      duration: `2022`,
      location: 'London, United Kingdom',
      shortdescription: `4-months internship at ScribeLabs.
      Redesign of the website and the internal platform of the company with Vuejs and Quasar.`,
      longdescription: `During my internship abroad, I was recruited by the startup ScribeLabs, which does data automation for banks and companies.
      In a first step, I was in charge of redesigning the company's website, with a simple Nodejs server and TailwindCSS.
      In a second step, I worked on the client platform, on UI/UX elements. This was done in Vue3, with Quasar.
      I also had to use AWS services and discovered GraphQL.
      `,
      logo: '/assets/img/scribe-logo.png',
      activated: true,
      lang: 'Vue3, Quasar, TailWindCSS, AWS, GraphQL',
    },
    {
      company: 'TotalEnergies',
      duration: `2021`,
      location: 'Pau, France',
      shortdescription: `3-month internship at TotalEnergies.
            Development of geophysical tools with Angular, as well as a member space with Expressjs/Sequelize.`,
      longdescription: `I was hired by the AVO club of Total to redesign some obsolete tools.
            Indeed, the geophysicists of the team were using computer tools that facilitated their calculations.
            Unfortunately, these tools were in Java and available on Internet Explorer, a browser that was left to its own devices.
            The challenge was to give a new life to these programs in a more current language.
            The internship went wonderfully well and taught me a lot, from a computer science and physics point of view.
            It also reinforced my desire to continue in this direction.`,
      logo: '/assets/img/total.png',
      activated: false,
      lang: 'Angular, Material, ExpressJS, Sequelize, PostgreSQL',
    },
    {
      company: 'Projet Democratia',
      duration: `2021`,
      location: 'Remote, France',
      shortdescription: `Design of a presentation site and blog for the association Projet Democratia, all in team.`,
      longdescription: `Projet Democratia is an association of students from all over France whose goal is to re-interest young people in current political issues, and thus fight against the growing abstention.
            young people to current political issues, and thus fight against the growing abstention.
            I was added to the project in the team of developers of the website, first to look at the code, then to fully
            to take part in it.
            This is the project that taught me the most in terms of teamwork, with the use of tools such as Jira and Git.`,
      logo: '/assets/img/projetdemocratia.png',
      activated: false,
      lang: 'React, Bootstrap, ExpressJS, Sequelize',
    },
    {
      company: 'Freelance',
      duration: `2015-${this.getDate()}`,
      location: 'Toulouse/Pau, France',
      shortdescription: `Followed numerous trainings to become a Full Stack web developer, notably via the Udemy and OpenClassroom platforms.
            Strong personal dedication to the idea of evolving in this career.`,
      longdescription: `If I was interested in computer science from a very early age, it's web development that I've chosen.
            My first snippets of web sites go back to my 3rd grade internship, which I did at SII Sud-Ouest in Toulouse.
            Many trainings and hours of work followed to improve myself. I quickly made websites for my relatives,
            often with CMS for reasons of professionalism, while cultivating my passion for web languages on the side.
            In order to make myself official, I wanted to acquire the title of auto-entrepreneur at 16. Unfortunately, the age makes the administrative side
            very complicated. So I waited until I was 20, after my pre-preparation, to get the title of micro-entrepreneur.
            I'm looking for freelance missions in parallel to my engineering school years.
            `,
      logo: '/assets/img/freelance.png',
      activated: false,
      lang: 'Full stack',
    },
  ];
}
