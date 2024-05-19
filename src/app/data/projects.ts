import {
    blender,
    flutter, golang,
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
import {ProjectContext} from "../components/enums/project-context.enum";

const BASE_VIDEO_URL = "https://res.cloudinary.com/dqkwdsjwb/video/upload/v1716157008/portfolio/"

export const projects: Project[] = [
    {
        title: "Trend.me",
        context: ProjectContext.PROFESSIONAL,
        owner: "Proservices Training Company",
        releaseDate: "En cours",
        subtitle: "Réseau social qui basé sur les intérêts et la géolocalisation. (Coming soon)",
        description: "Trend.me est un réseau social qui permet aux utilisateurs de partager des publications, " +
            "réelsn, stories, et de suivre d'autres utilisateurs. " +
            "Les utilisateurs peuvent également discuter en privé, commenter et liker les publications." +
            "Les utilisateurs aussi suivre des hashtags et des tendances, " +
            "et consulter les publications les plus populaires." +
            "Cette application donne la possibilité de renceontrer des personnes qui sont dans un même endroit ou intérêt." +
            "Trend.me est une application en constante évolution, et de nouvelles fonctionnalités seront ajoutées dans les prochaines versions." +
            "L'application n'est pas encore disponible sur les stores.",
        type: ProjectType.MOBILE,
        platforms: "Mobile",
        technologies: [flutter, springBoot, mysql, golang],
        logoUrl: "assets/images/logo-projects/no_logo.png",
    }, {
        title: "Square",
        context: ProjectContext.PROFESSIONAL,
        owner: "Proservices Training Company",
        releaseDate: "En cours",
        subtitle: "Application mobile pour la gestion de scolarité.",
        description: "Square est une application mobile qui permet la gestion des cours, devoir, examens, notes, absences, emloi du temps, etc ..\n" +
            "En tant qu'étudiant, vous pouvez ajouter vos cours, devoirs, examens, notes, absences, et consulter votre emploi du temps.\n" +
            "En tant que professeur, vous pouvez ajouter vos cours, devoirs, examens, notes, absences, et consulter votre emploi du temps.\n" +
            "En tant que parent, vous pouvez consulter les notes, absences, emploi du temps de vos enfants.\n" +
            "L'application est toujours en cours de développement, et de nouvelles fonctionnalités seront ajoutées dans les prochaines versions." +
            "L'application n'est pas encore disponible sur les stores.",
        type: ProjectType.MOBILE,
        platforms: "Mobile",
        technologies: [flutter, nodejs, mongo],
        logoUrl: "assets/images/logo-projects/square.png",
        videoUrl: BASE_VIDEO_URL + "square.mp4",
    }, {
        title: "Pedagogue Sportif",
        context: ProjectContext.PROFESSIONAL,
        owner: "Elite Sports Innovation Holding",
        releaseDate: "Janvier 2024",
        subtitle: "Application mobile pour les entraîneurs et les enseignants de sport.",
        description: "Application mobile indispensable pour les entraîneurs et les enseignants de sport." +
            " Avec la plus grande bibliothèque numérique spécialisée à votre disposition, " +
            "cette application vous offre un ensemble complet d'outils pour optimiser la gestion de votre équipe. " +
            "Suivez de près les performances technico-tactiques, physiques et mentales de vos sportifs, " +
            "et gardez un œil sur les compétitions. Profitez d'outils avancés tels que l'analyse vidéo, " +
            "le dessin tactique pour planifier vos exercices, " +
            "ainsi que des programmes d'entraînement musculaire et des tests physiques basés sur les dernières recherches scientifiques." +
            "\"Sports Pedagogue\" intègre également des fonctionnalités de statistiques, " +
            "de chronométrage avec beeper et de nutrition sportive," +
            " complétées par des recettes adaptées aux besoins des athlètes. " +
            "Tout ce dont vous avez besoin pour mener votre équipe vers le succès est désormais à portée de main.",
        type: ProjectType.MOBILE,
        platforms: "Mobile",
        technologies: [flutter],
        logoUrl: "assets/images/logo-projects/pedagogue.png",
        videoUrl: BASE_VIDEO_URL + "pedagogue.mp4",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.elite.pedagogue",
    }, {
        title: "Card VIP",
        context: ProjectContext.PROFESSIONAL,
        owner: "Elite Sports Innovation Holding",
        releaseDate: "Décembre 2023",
        subtitle: "Application mobile pour gérer les cartes visites intelligentes.",
        description: "Votre carte de visite numérique sans contact démontre instantanément que vous êtes la personne idéale, " +
            " le partenaire ou le collaborateur parfait. Dans un monde où les cartes de visite en papier deviennent obsolètes, " +
            "distinguez-vous en proposant une expérience numérique avant-gardiste. Avec votre carte de visite digitale, " +
            "partagez vos informations de manière fluide et innovante, laissant une impression marquante et moderne.",
        type: ProjectType.MOBILE,
        platforms: "Mobile",
        technologies: [flutter],
        logoUrl: "assets/images/logo-projects/card_vip.png",
        videoUrl: BASE_VIDEO_URL + "card_vip.mp4",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.card_vip",
    }, {
        title: "CIPA",
        context: ProjectContext.END_OF_STUDIES,
        owner: "Industry X.0",
        releaseDate: "Août 2023",
        subtitle: "Application industrielle de digitalisation d'audits et detection de problemes",
        description: "Une application mobile pour aider les industries manufacturières à résoudre les inefficacités dans leur processus\n" +
            "d'inspection manuelle sur papier, qui peuvent entraîner des erreurs, des retards et des coûts supplémentaires.\n La" +
            "solution permet la dématérialisation de l'inspection et facilite la collecte et l'analyse des données d'inspection en\n" +
            "temps réel pour améliorer la productivité et la prise de décision. ",
        type: ProjectType.MOBILE,
        platforms: "Mobile / Tablette",
        technologies: [flutter, springBoot, mysql],
        logoUrl: "assets/images/logo-projects/cipa.png",
        videoUrl: BASE_VIDEO_URL + "cipa.mp4",
    }, {
        title: "Kitebi",
        context: ProjectContext.INTERNSHIP,
        owner: "Direction de la Lecture Publique, Tunis",
        releaseDate: "Août 2022",
        subtitle: "Application pour lecture de livres PDF et livres audio",
        description:
            "Cette application permet aux utilisateurs de lire et d'écouter des" +
            " livres publiés par le Direction de la Lecture Publique de tunis." +
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
        technologies: [flutter, reactjs, nodejs, mongo],
        platforms: "Mobile / Web",
        logoUrl: "assets/images/logo-projects/kitebi.png",
        videoUrl: BASE_VIDEO_URL + "kitebi.mp4",
        altVideoUrl: BASE_VIDEO_URL + "kitebi-web.mp4",
    }, {
        title: "Chicky",
        context: ProjectContext.SCHOOL,
        owner: "ESPRIT",
        releaseDate: "Février 2021",
        subtitle: "Application réseau social avec géolocalisation.",
        description: "Réseau social qui trouve les personnes qui sont dans un même endroit ainsi de créer un" +
            " profil ou les utilisateurs peuvent publier des des vidéos" +
            " et se contacter." +
            " ou l’application les aides par un ensemble des vues très élevées. \n" +
            "Source code pour iOS : https://github.com/jamelbda97/Chicky-ios.",
        platforms: "iOS (Swift) / Android (Kotlin)",
        type: ProjectType.MOBILE,
        logoUrl: "assets/images/logo-projects/chicky.png",
        videoUrl: BASE_VIDEO_URL + "chicky",
        technologies: [kotlin, swift, nodejs, mongo],
        sourceCodeUrl: "https://github.com/jamelbda97/Chicky-android",
        sourceCodeIOSUrl: "https://github.com/jamelbda97/Chicky-ios",
        sourceCodeBackendUrl: "https://github.com/jamelbda97/Chicky-server",
    }, {
        title: "Khedemti",
        context: ProjectContext.INTERNSHIP,
        owner: "Ben's best job",
        releaseDate: "Août 2021",
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
        logoUrl: "assets/images/logo-projects/khedemti.png",
        videoUrl: BASE_VIDEO_URL + "khedemti.mp4",
        technologies: [symfony4, mysql],
        sourceCodeUrl: "https://github.com/jamelbda97/PIDEV-Devchasers-WEB",
    }, {
        title: "Rose",
        context: ProjectContext.SCHOOL,
        owner: "ESPRIT",
        releaseDate: "Mai 2022",
        subtitle: "Application smart home.",
        description: "Rose est une application qui controle les appareils intelligents" +
            " connecté dans la maison.\n" +
            "Rose facilite la vie dans la maison, elle permet d’économiser" +
            " de l’Energie, contrôler des appareils simultanément. ",
        platforms: "Mobile",
        type: ProjectType.MOBILE,
        logoUrl: "assets/images/logo-projects/rose.png",
        videoUrl: "",
        technologies: [flutter, mongo],
        sourceCodeUrl: "https://github.com/talbi21/rose",
    }, {
        title: "Togo",
        context: ProjectContext.END_OF_STUDIES,
        owner: "ISAMM",
        releaseDate: "Avril 2020",
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
        logoUrl: "assets/images/logo-projects/togo.png",
        videoUrl: BASE_VIDEO_URL + "./my-projects/videos/mobile/none.mp4",
    }
];

export const hiddenProject: Project = {
    description: "",
    context: ProjectContext.PERSONAL,
    releaseDate: "",
    owner: "",
    logoUrl: "",
    platforms: "",
    subtitle: "",
    technologies: [],
    title: "",
    type: ProjectType.UNDEFINED,
    videoUrl: "",
}