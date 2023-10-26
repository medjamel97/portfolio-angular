import {
    blender,
    flutter,
    kotlin,
    maya,
    mongo,
    mysql,
    nodejs,
    reactjs,
    springBoot,
    swift,
    symfony4,
    unity
} from "./technologies";
import {Project} from "../model/project.model";
import {ProjectType} from "../components/enums/project-type.enum";

const BASE_VIDEO_URL = "https://res.cloudinary.com/dllgxcugj/video/upload/v1698010497/portfolio/"

export const projects: Project[] = [
    {
        title: "Kitebi",
        subtitle: "Application pour lecture de livres PDF et livres audio",
        description:
            "Cette application permet aux utilisateurs de lire et d'écouter des" +
            " livres publiés par le Ministère des Affaires Culturelles." +
            " Vous pouvez accéder à des livres au format PDF, les télécharger," +
            " les ajouter à vos favoris et les partager. De même, les livres audio" +
            " au format MP3 peuvent être écoutés, téléchargés, ajoutés aux favoris" +
            " et partagés." +
            "\n\n" +
            "Vous avez l'acces a une bibliothèque regroupe tous vos livres et " +
            "livres audio préférés, ainsi que ceux que vous avez téléchargés." +
            "\n\n" +
            "Vous avez la possibilité de partager des publications comprenant du texte," +
            " des fichiers audio et des images, tout en ayant accès aux publications" +
            " d'autres utilisateurs. " +
            "\n\n" +
            "L'application propose également une fonctionnalité de recherche de" +
            " contenu, permettant de trier les résultats par catégorie ou par âge." +
            " Vous pouvez profiter d'un mode sombre pour une meilleure expérience " +
            "visuelle, et choisir entre les langues français, anglais et arabe pour " +
            "l'interface de l'application.",
        type: ProjectType.MULTIPLATFORM,
        technologies: [flutter, reactjs, nodejs],
        platforms: "Mobile / Web",
        logoUrl: "assets/images/logo-projects/logo1.png",
        videoUrl: BASE_VIDEO_URL + "mobile/kitebi.mp4",
        altVideoUrl: BASE_VIDEO_URL + "web/kitebi.mp4",
    }, {
        title: "CIPA",
        subtitle: "Application industrielle de digitalisation d'audits et detection de problemes",
        description: "Une application mobile pour aider les industries manufacturières à résoudre les inefficacités dans leur processus\n" +
            "d'inspection manuelle sur papier, qui peuvent entraîner des erreurs, des retards et des coûts supplémentaires. La\n" +
            "solution permet la dématérialisation de l'inspection et facilite la collecte et l'analyse des données d'inspection en\n" +
            "temps réel pour améliorer la productivité et la prise de décision. ",
        type: ProjectType.MOBILE,
        platforms: "Mobile / Tablette",
        technologies: [flutter, springBoot, mysql],
        logoUrl: "assets/images/logo-projects/logo6.png",
        videoUrl: BASE_VIDEO_URL + "mobile/cipa.mp4",
    }, {
        title: "Khedemti",
        subtitle: "Site web pour recrutement/recherche de travail/missions/evenements",
        description:
            "Sur ce site web, les utilisateurs ont la possibilité de se connecter" +
            " en tant que candidat ou en tant que société." +
            "\n\n" +
            "Les candidats peuvent parcourir les offres d'emploi disponibles," +
            " consulter les détails de chaque offre et postuler directement en ligne." +
            " De plus, ils ont la possibilité d'ajouter des notes personnelles" +
            " aux offres qu'ils ont consultées, ce qui peut leur servir " +
            "de rappel ou de moyen de suivi." +
            "\n\n" +
            "Les sociétés, quant à elles, peuvent ajouter des offres d'emploi, " +
            "des missions, des événements et des formations sur le site. " +
            "Elles peuvent fournir tous les détails pertinents concernant ces" +
            " opportunités, tels que la description du poste, les qualifications" +
            " requises, la localisation, la rémunération, etc. Les sociétés ont " +
            "ainsi la possibilité de promouvoir leurs opportunités et d'attirer " +
            "des candidats qualifiés." +
            "\n\n" +
            "En résumé, ce site web offre aux candidats la possibilité de" +
            " consulter et de postuler à des offres d'emploi, ainsi que" +
            " d'ajouter des notes personnelles. Les sociétés, de leur côté," +
            " peuvent publier des offres d'emploi, des missions, des événements " +
            "et des formations pour attirer des candidats potentiels.",
        platforms: "Web",
        type: ProjectType.WEB,
        logoUrl: "assets/images/logo-projects/logo4.png",
        videoUrl: BASE_VIDEO_URL + "web/khedemti.mp4",
        technologies: [symfony4, mysql],
        sourceCodeUrl: "https://github.com/jamelbda97/PIDEV-Devchasers-WEB",
    }, {
        title: "Chicky",
        subtitle: "Application réseau social avec géolocalisation.",
        description: "Réseau social qui trouve les personnes qui sont dans un même endroit ainsi de créer un" +
            " profil ou les utilisateurs peuvent publier des des vidéos" +
            " et se contacter." +
            " ou l’application les aides par un ensemble des vues très élevées. \n" +
            "Source code pour iOS : https://github.com/jamelbda97/Chicky-ios.",
        platforms: "iOS (Swift) / Android (Kotlin)",
        type: ProjectType.MOBILE,
        logoUrl: "assets/images/logo-projects/logo2.png",
        videoUrl: BASE_VIDEO_URL + "mobile/chicky",
        technologies: [kotlin, swift, mongo],
        sourceCodeUrl: "https://github.com/jamelbda97/Chicky-android",
    }, {
        title: "Rose",
        subtitle: "Application smart home.",
        description: "Rose est une application qui controle les appareils intelligents" +
            " connecté dans la maison.\n" +
            "Rose facilite la vie dans la maison, elle permet d’économiser" +
            " de l’Energie, contrôler des appareils simultanément. ",
        platforms: "Mobile",
        type: ProjectType.MOBILE,
        logoUrl: "assets/images/logo-projects/logo3.png",
        videoUrl: BASE_VIDEO_URL + "mobile/none.mp4",
        technologies: [flutter, mongo],
        sourceCodeUrl: "https://github.com/talbi21/rose",
    }, {
        title: "Togo",
        subtitle: "Jeu mobile culturel avec géolocalisation",
        description:
            "Il s'agit d'un réseau social basé sur la localisation qui permet de " +
            "trouver des personnes se trouvant dans un même endroit." +
            " Les utilisateurs peuvent créer un profil personnel et publier " +
            "des vidéos pour partager leur contenu avec la communauté. " +
            "L'application facilite également les interactions entre les " +
            "utilisateurs en leur permettant de se contacter les uns les autres." +
            "\n" +
            "\n" +
            "Cette application offre un espace où les utilisateurs peuvent partager" +
            " leurs vidéos et interagir avec d'autres membres de la communauté. " +
            "L'accent est mis sur la connectivité entre les personnes se trouvant" +
            " au même endroit géographique." +
            "\n" +
            "\n" +
            "En résumé, cette application est un réseau social géolocalisé où " +
            "les utilisateurs peuvent publier des vidéos, interagir avec d'autres " +
            "utilisateurs et créer des connexions avec des personnes présentes " +
            "dans leur localité.",
        type: ProjectType.GAME,
        platforms: "Mobile",
        technologies: [unity, maya, blender],
        logoUrl: "assets/images/logo-projects/logo5.png",
        videoUrl: BASE_VIDEO_URL + "./my-projects/videos/mobile/none.mp4",
    }
];

export const hiddenProject: Project = {
    description: "",
    logoUrl: "",
    platforms: "",
    subtitle: "",
    technologies: [],
    title: "",
    type: ProjectType.UNDEFINED,
    videoUrl: "",
}