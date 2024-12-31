import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopupComponent } from '@components/shared/confirm-popup/confirm-popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupModalService {

  constructor(private dialog: MatDialog) {}

  openConfirmPopup(message: string, confirmation: string='Confirmation'): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(ConfirmPopupComponent, {
        width: '400px',
        disableClose: false,
        data: { title: confirmation, message: message },
      });

      // Handle when the dialog is closed
      dialogRef.afterClosed().subscribe((result) => {
        if (result === 'accept') {
          console.log('User accepted');
          resolve(true);  // Resolve with true when accepted
        } else if (result === 'decline') {
          console.log('User declined');
          resolve(false); // Resolve with false when declined
        } else {
          console.log('No action taken');
          resolve(false); // Resolve with false if no action is taken
        }
      });

      // Optional: You can immediately close the dialog in case of other conditions
      // if needed, but this is usually unnecessary for a confirmation dialog
    });
  }
}
