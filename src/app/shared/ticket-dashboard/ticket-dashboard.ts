import { CommonModule, AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, computed, ElementRef, EventEmitter, inject, OnDestroy, OnInit, Output, signal, ViewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule, MatTable } from '@angular/material/table';
import { Subject, takeUntil, fromEvent, map, debounceTime, distinctUntilChanged } from 'rxjs';
import { Ticket, TicketGroup, TicketPriority, TicketStatus } from '../../core/models/ticket.model';
import { UserRole } from '../../core/models/user.model';
import { TicketService } from '../../core/services/ticket.service';
import { UserService } from '../../core/services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { AgePipe } from '../pipes/age-pipe-pipe';
import { MatInputModule } from '@angular/material/input';
import { MockData } from '../../assets/mock-data';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-ticket-dashboard',
  imports: [CommonModule, MatTableModule, AsyncPipe, MatChipsModule, MatIconModule,
    MatExpansionModule, MatInputModule,MatTooltipModule,
    AgePipe,
    MatButtonModule],
  templateUrl: './ticket-dashboard.html',
  styleUrl: './ticket-dashboard.scss',
})
export class TicketDashboard implements OnInit, AfterViewInit, OnDestroy {
  @Output() viewDetails = new EventEmitter<Ticket>();
  @Output() feedBack = new EventEmitter<Ticket>();


  // Services & DI
  public ticketService = inject(TicketService);
  public userService = inject(UserService);
  TicketStatus = TicketStatus;
  // Requirement 1: Component cleanup
  private destroy$ = new Subject<void>();

  // Enum exposure for template
  public UserRole = UserRole;

  // Requirement 7: Signal-based state management
  public currentUser = signal(this.userService.getCurrentUserValue());

  /**
   * Requirement 3: Observables drive the data flow.
   * We convert the tickets stream to a signal for high-performance count calculations.
   */
  public tickets$ = this.ticketService.getFilteredTickets(this.currentUser()!);
  private ticketsSignal = toSignal(this.tickets$, { initialValue: [] as Ticket[] });



  // Requirement 7: computed() signals for stats cards
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

  public newCount = computed(() =>
    this.ticketsSignal().filter(t =>
      this.getTicketGroup(t.status) === TicketGroup.New
    ).length
  );

  public openCount = computed(() =>
    this.ticketsSignal().filter(t =>
      this.getTicketGroup(t.status) === TicketGroup.Open
    ).length
  );

  public closedCount = computed(() =>
    this.ticketsSignal().filter(t =>
      this.getTicketGroup(t.status) === TicketGroup.Closed
    ).length
  );


  // Requirement 1: MatTable access
  @ViewChild(MatTable) table!: MatTable<Ticket>;

  // Dynamic columns based on role
  public displayedColumns = computed(() => {
    const cols = ['title', 'status', 'priority', 'age'];
    if (this.currentUser()?.role !== UserRole.END_USER) cols.push('createdBy');
    cols.push('assignedTo', 'action');
    return cols;
  });
  ticketStatus = TicketStatus;
  ticketPriority = TicketPriority;

  // Requirement 1: Load data only in ngOnInit
  ngOnInit(): void {
    // React to user changes if simulated login occurs
    this.userService.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.currentUser.set(user));
  }
  @ViewChild('ticketSearch', { static: false })
  searchInput!: ElementRef<HTMLInputElement>;


  // Requirement 1: ngAfterViewInit for UI elements
  ngAfterViewInit() {
    console.log(this.searchInput); // should NOT be undefined

    if (this.searchInput) {
      this.initSearchStream(this.searchInput.nativeElement);
    }
  }


  /**
   * Requirement 4: User events as streams
   */
  private initSearchStream(element: HTMLInputElement): void {
    fromEvent(element, 'input').pipe(
      map(event => (event.target as HTMLInputElement).value),
      debounceTime(300), // Requirement 4: debounce search
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(term => {
      console.log('Searching for:', term);
      // Implementation of search logic via service
    });
  }

  // Requirement 4: Chip click implemented as stream logic
  onFilterChange(status: string): void {
    if (!status) {
      status = 'All';
    }
    this.ticketService.updateFilter(status);
  }

  getUserName(assigneeId?: string): string {
    if (!assigneeId) return '-';
    return MockData.users.find(u => u.userId === assigneeId)?.name ?? '-';
  }

  // Requirement 1: Cleanup
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Action Methods
  provideInput(t: Ticket) { console.log('Input requested for', t.ticketId); }
  resolve(t: Ticket) { console.log('Resolving', t.ticketId); }
  delegate(t: Ticket) { console.log('Delegating', t.ticketId); }
  requestInput(t: Ticket) { console.log('Requesting input for', t.ticketId); }
  assign(t: Ticket) {
    this.viewDetails.emit(t);
  }
  close(t: Ticket) { console.log('Closing', t.ticketId); }
  reopen(t: Ticket) { console.log('Reopening', t.ticketId); }
  feedback(t: Ticket) {
    this.feedBack.emit(t);
  }
}