import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, shareReplay, switchMap } from 'rxjs';
import { MockData } from '../../assets/mock-data';
import { Ticket, TicketGroup, TicketStatus } from '../models/ticket.model';
import { User, UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  // Requirement 3: Data Source as Observable
  private tickets$ = of(MockData.tickets);

  // Requirement 5: BehaviorSubject for Shared State (Active Filter)
  private filterSubject = new BehaviorSubject<string>('All');
  public filterAction$ = this.filterSubject.asObservable();

  /**
   * Requirement 3: switchMap for ticket reload and map for role-based transformation
   * This is the main stream the component will subscribe to using AsyncPipe.
   */
  public getFilteredTickets(user: User): Observable<Ticket[]> {
    return this.filterAction$.pipe(
      switchMap(currentFilter => this.tickets$.pipe(
        // Step A: Apply Role-Based Security (Logic moved to Service)
        map(tickets => this.filterByRole(tickets, user)),
        // Step B: Apply UI Status Filter
        map(tickets => this.filterByStatus(tickets, currentFilter)),
        // Optimize: shareReplay prevents multiple execution for multiple subscribers
        shareReplay(1)
      ))
    );
  }

  private filterByRole(tickets: Ticket[], user: User): Ticket[] {
    if (user.role === UserRole.END_USER) {
      return tickets.filter(t => t.createdByUserId === user.userId);
    }
    if (user.role === UserRole.SUPPORT_ENGINEER) {
      // Support sees New tickets OR tickets assigned to them
      return tickets.filter(t => t.status === TicketStatus.New || t.assignedToUserId === user.userId);
    }
    return tickets; // Supervisor (Role 3) sees everything
  }

  private filterByStatus(tickets: Ticket[], status: string): Ticket[] {
    const sorted = tickets.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    if (status === TicketGroup.All) return sorted;

    return sorted.filter(t => this.getTicketGroup(t.status) === status);
  }
  private getTicketGroup(status: TicketStatus): TicketGroup {
    switch (status) {
      case TicketStatus.New:
        return TicketGroup.New;

      case TicketStatus.Assigned:
      case TicketStatus.Input_Requested:
        return TicketGroup.Open;

      default:
        return TicketGroup.Closed;
    }
  }

  // Requirement 5: Method to trigger state change
  updateFilter(status: string) {
    this.filterSubject.next(status);
  }
  updateTicket(updatedTicket: Ticket): void {
    // In a real app, this would involve an HTTP call to update the backend
    // For this mock, we'll just log the update and simulate a reload
    console.log('Updating ticket:', updatedTicket);
    // Simulate reload by re-emitting the current filter (which triggers getFilteredTickets)
    this.filterSubject.next(this.filterSubject.value);
  }
}
