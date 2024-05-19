import {Technology} from "./technology.model";
import {ProjectType} from "../components/enums/project-type.enum";
import {ProjectContext} from "../components/enums/project-context.enum";

export interface Project {
    title: string;
    context: ProjectContext;
    owner: string;
    releaseDate: string;
    subtitle: string;
    description: string;
    type: ProjectType;
    technologies: Technology[];
    platforms: string;
    logoUrl: string;
    videoUrl?: string;
    altVideoUrl?: string;
    sourceCodeUrl?: string;
    sourceCodeIOSUrl?: string;
    sourceCodeBackendUrl?: string;
    playStoreUrl?: string;
}