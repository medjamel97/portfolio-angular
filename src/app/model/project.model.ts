import {Technology} from "./technology.model";
import {ProjectType} from "../components/enums/project-type.enum";

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    type: ProjectType;
    technologies: Technology[];
    platforms: string;
    logoUrl: string;
    videoUrl: string;
    altVideoUrl?: string;
    sourceCodeUrl?: string;
}