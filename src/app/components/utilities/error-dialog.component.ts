import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
})
export class ErrorDialogComponent {
  dialogMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogMessage = data;
  }
}
