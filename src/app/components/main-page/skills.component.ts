import {Component} from '@angular/core';
import {skills} from "../../data/skills";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
})
export class SkillsComponent {
    protected readonly skills = skills;
}
