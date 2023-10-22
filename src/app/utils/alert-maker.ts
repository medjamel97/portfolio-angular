import { MatSnackBar } from '@angular/material/snack-bar';

export class AlertMaker {
  static snackBar: MatSnackBar;

  static simple(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
