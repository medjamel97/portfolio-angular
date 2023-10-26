import {Component} from '@angular/core';
import {projects} from "../../data/projects";
import {Project} from "../../model/project.model";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ProjectType} from "../enums/project-type.enum";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    animations: [
        trigger('expandCollapse', [
            state('open', style({height: '100%', opacity: '100%'})),
            state('closed', style({height: '0', opacity: '0%'})),
            transition('open <=> closed', animate('500ms ease-in-out')),
        ]),
    ],
})
export class ProjectsComponent {

    webIsShown: boolean = false
    mobileIsShown: boolean = false
    moreIsShown: boolean = false

    selectedProject: Project = projects[0]

    toggleShowMore() {
        if (this.webIsShown && !this.moreIsShown) this.webIsShown = false
        this.moreIsShown = !this.moreIsShown;
    }

    changeProject(project: Project) {
        this.selectedProject = project;

        // Trigger a refresh of the video elements
        const videoElementWeb = document.getElementById('video-web') as HTMLVideoElement;
        const videoElementMobile = document.getElementById('video-mobile') as HTMLVideoElement;

        if (videoElementWeb) videoElementWeb.load();
        if (videoElementMobile) videoElementMobile.load();
    }

    toggleShowWeb() {
        if (this.mobileIsShown) this.mobileIsShown = false
        this.webIsShown = !this.webIsShown
    }

    toggleShowMobile() {
        if (this.webIsShown) this.webIsShown = false
        this.mobileIsShown = !this.mobileIsShown
    }

    protected readonly console = console;
    protected readonly ProjectType = ProjectType;
}
