import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {hiddenProject, projects} from "../../data/projects";
import {Project} from "../../model/project.model";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ProjectType} from "../enums/project-type.enum";

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    animations: [
        trigger('slideAnimation', [
            state('*', style({transform: 'translateX(-100%)'})),
            state('next', style({transform: 'translateX(-200%)'})),
            state('previous', style({transform: 'translateX(0%)'})),
            transition('* => next', animate('300ms ease-in-out')),
            transition('* => previous', animate('300ms ease-in-out')),
        ]),
        trigger('sizeAnimation', [
            state('normal', style({transform: 'scale(0.6)', opacity: 1})),
            state('bigger', style({transform: 'scale(1)', opacity: 1})),
            transition('normal => bigger', animate('200ms ease-in')),
            transition('bigger => normal', animate('200ms ease-out')),
        ]),
    ]
})
export class CarouselComponent implements OnInit {
    @Output() selectedProjectEmitter: EventEmitter<Project> = new EventEmitter<Project>();

    projects = projects;
    visibleProjects: Project[] = [];
    currentIndex = 0;
    canNavigate = true;
    isFirstIndex = true;
    isLastIndex = false;

    animationDirection: '*' | 'next' | 'previous' = '*';

    ngOnInit() {
        this.projects.unshift(hiddenProject)
        this.projects.unshift(hiddenProject)
        this.visibleProjects = this.projects.slice(0, 6);

        this.navigate(true)
    }

    updateVisibleProjects() {
        setTimeout(() => {
            this.visibleProjects = this.projects.slice(
                this.currentIndex,
                this.currentIndex + 5,
            );

            this.refreshIndex()

            this.selectedProjectEmitter.emit(projects[this.currentIndex + 2]);

            this.animationDirection = '*';
            this.canNavigate = true;
        }, 300);
    }

    handleTap(index: number) {
        if (index != 2) this.navigate(index > 2)
    }

    navigate(isNext: boolean) {
        if (this.canNavigate) {
            this.refreshIndex()

            if (isNext) {
                if (!this.isLastIndex) {
                    this.canNavigate = false;
                    this.currentIndex += 1;
                    this.animationDirection = 'next';
                    this.updateVisibleProjects();
                }
            } else {
                if (!this.isFirstIndex) {
                    this.canNavigate = false;
                    this.currentIndex -= 1;
                    this.animationDirection = 'previous';
                    this.updateVisibleProjects()
                }
            }
        }
    }

    refreshIndex() {
        this.isFirstIndex = this.currentIndex <= 0;
        this.isLastIndex = this.currentIndex >= this.projects.length - 3;
    }

    protected readonly ProjectType = ProjectType;
}
