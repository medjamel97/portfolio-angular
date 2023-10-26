import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './information-dialog.component.html',
    standalone: true,
    imports: [MatButtonModule, MatDialogModule],
})
export class InformationDialogComponent {
    dialogMessage: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.dialogMessage = data;
    }
}
