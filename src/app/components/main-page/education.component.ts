import {Component} from '@angular/core';
import {formations} from "../../data/formations";
import {experiences} from "../../data/experiences";

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
})
export class EducationComponent {

    protected readonly formations = formations;
    protected readonly experiences = experiences;

    selectedFormationIndex = 0;
    selectedExperienceIndex = 0;

    setSelectedFormation(index: number) {
        this.selectedFormationIndex = index
    }

    setSelectedExperience(index: number) {
        this.selectedExperienceIndex = index
    }
}
