import { Component } from '@angular/core';
import { TicketDashboard } from '../../shared/ticket-dashboard/ticket-dashboard';
import { Ticket, TicketStatus } from '../../core/models/ticket.model';
import { FeedbackDialog } from './feedback-dialog/feedback-dialog';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from '../../core/services/ticket.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TicketDashboard],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class UserComponent {
  constructor(private dialog: MatDialog, private ticketService: TicketService) { }

  feedback(ticket: Ticket): void {
    const dialogRef = this.dialog.open(FeedbackDialog, {
      width: '350px',
      disableClose: true,
      data: ticket
    });
    dialogRef.afterClosed().subscribe((updated: Ticket | undefined) => {
      if (!updated) return;
      ticket.rating = updated.rating;
      ticket.feedback = updated.feedback;
      ticket.status = TicketStatus.Feedback_Received;
      this.ticketService.updateTicket(ticket)
    });

  }
}