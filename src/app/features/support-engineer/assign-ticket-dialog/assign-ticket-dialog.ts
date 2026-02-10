import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MockData } from '../../../assets/mock-data';
import { UserRole, User } from '../../../core/models/user.model';

@Component({
  selector: 'app-assign-ticket-dialog',
  imports: [MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './assign-ticket-dialog.html',
  styleUrl: './assign-ticket-dialog.scss',
})
export class AssignTicketDialog {
  assignee: string = '';
  comment: string = '';
  listOfAssignees:User[] = [];

  constructor(
    private dialogRef: MatDialogRef<AssignTicketDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.listOfAssignees = MockData.users.filter(u => u.role === UserRole.SUPPORT_ENGINEER);
   }

  assign() {
    this.dialogRef.close({
      assignedToUserId: this.assignee,
      comment: this.comment
    });
  }

  close() {
    this.dialogRef.close();
  }
}
