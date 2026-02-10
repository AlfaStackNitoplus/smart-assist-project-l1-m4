import { Component } from '@angular/core';
import { TicketDashboard } from '../../shared/ticket-dashboard/ticket-dashboard';
import { Ticket, TicketStatus } from '../../core/models/ticket.model';
import { AssignTicketDialog } from '../support-engineer/assign-ticket-dialog/assign-ticket-dialog';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from '../../core/services/ticket.service';

@Component({
  selector: 'app-supervisor',
  imports: [TicketDashboard],
  templateUrl: './supervisor.html',
  styleUrl: './supervisor.scss',
})
export class Supervisor {

  constructor(private dialog: MatDialog, private ticketService: TicketService) { }
  viewTicketDetails(ticket: Ticket): void {
    this.dialog.open(AssignTicketDialog, {
      width: '360px',
      disableClose: true,
      data: {
        ticketId: ticket.ticketId
      }
    }).afterClosed().subscribe(result => {
      if (!result) {
        console.log('Dialog closed without assignment');
      } else {
        ticket.status = TicketStatus.Assigned;
        ticket.assignedToUserId = result.assignedToUserId;
        this.ticketService.updateTicket(ticket);
      }
    });

  }
}
