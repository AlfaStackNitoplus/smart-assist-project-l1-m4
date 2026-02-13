import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MockData } from '../../../assets/mock-data';
 
type DocCard = {
  step: number;
  title: string;
  technical: string[];
  functional: string[];
};
 
type EvaluationItem = {
  id: string;
  label: string;
  checked: boolean;
};
 
@Component({
  selector: 'app-resource',
  imports: [CommonModule,
    RouterModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatListModule,
    MatCheckboxModule],
  templateUrl: './resource.html',
  styleUrl: './resource.scss',
})
export class Resource implements OnInit {
  private readonly evaluationStorageKey = 'smart-assist:l1m4:evaluation-parameter';
 
  public readonly requirementCards: DocCard[] = [
    {
      step: 1,
      title: 'Mock Data Setup',
      technical: [
        'JSON handling',
      ],
      functional: [
        'Create mock data for Users',
        'Create mock data for Menus',
        'Create mock data for Tickets',
      ],
    },
    {
      step: 2,
      title: 'Login & User Context (JSON + Data Binding)',
      technical: [
        'Angular Concepts',
        'Interpolation for displaying user information',
        'Two-way data binding for login inputs',
        'Angular Material Components',
        'MatInput for login input',
        'MatButton for login action',
        'MatHint for helper/validation hints',
      ],
      functional: [
        'On login, identify the user from JSON data',
        'On success, load user context (Name and Role)',
        'Authenticated user details available for subsequent navigation and UI rendering',
        'Show error message on invalid login',
      ],
    },
    {
      step: 3,
      title: 'Role-Based Menu Rendering (Structural Directives)',
      technical: [
        'Structural directives to render menus by role',
        'Role → menu mapping from mock data',
      ],
      functional: [
        'Menu changes dynamically based on user role',
        'Only permitted menu items are visible for the logged-in role',
      ],
    },
    {
      step: 4,
      title: 'Role-Based Ticket Visibility',
      technical: [
        'Ticket filtering rules implemented in services',
        'Components consume Observable<Ticket[]> (AsyncPipe)',
      ],
      functional: [
        'Different users see different ticket sets based on role',
        'No-data handling when no tickets match role/filter',
      ],
    },
    {
      step: 5,
      title: 'Ticket Display using Angular Material Table',
      technical: [
        'MatTable for ticket display',
        'Standardized columns and consistent rendering',
      ],
      functional: [
        'Tickets displayed in a consistent tabular layout',
        'Columns remain standardized for review',
      ],
    },
    {
      step: 6,
      title: 'UI Highlighting Rules (Attribute Directives)',
      technical: [
        'Use [ngClass] and [ngStyle] for conditional styling',
      ],
      functional: [
        'Highlighting applied based on status/priority rules',
        'Visual cues improve readability in the table',
      ],
    },
    {
      step: 7,
      title: 'Reusable Custom Hover Directive',
      technical: [
        'Custom directive for hover behavior (mouseenter/mouseleave)',
        'Reusable directive applied to table rows',
      ],
      functional: [
        'Rows highlight on mouse enter/leave',
        'Consistent hover behavior across ticket tables',
      ],
    },
    {
      step: 8,
      title: 'Pipes Usage (Built-in + Custom)',
      technical: [
        'Built-in pipes usage where applicable',
        'One custom pipe for readable status labels',
      ],
      functional: [
        'Human-readable status labels in UI',
        'Consistent formatting across screens',
      ],
    },
    {
      step: 9,
      title: 'Material + Bootstrap Usage Guidelines',
      technical: [
        'Material for components; Bootstrap for layout only',
        'Keep component styling and layout responsibilities separated',
      ],
      functional: [
        'Consistent UI components with responsive layout',
        'No styling conflicts between component and layout layers',
      ],
    },
    {
      step: 10,
      title: 'Final Acceptance Criteria',
      technical: [
        'Services return Observables; business logic in services',
        'Components consume streams (AsyncPipe) with no nested subscriptions',
      ],
      functional: [
        'Role-based menus and ticket visibility are correct',
        'Role/filter changes update the UI correctly',
      ],
    },
    {
      step: 11,
      title: 'Font / Font Size Consistency',
      technical: [
        'Use Material typography (Roboto) and consistent heading hierarchy',
        'Avoid ad-hoc font overrides in tabs/cards',
      ],
      functional: [
        'Consistent heading/subheading/body text sizing across all tabs',
        'Uniform readability for reviewers across the Resources page',
      ],
    },
  ];
 
  public readonly tips: string[] = [
    'Mock/test data is maintained centrally under src/app/assets/mock-data.ts; keep datasets consistent when adding new items.',
    'Login + navigation flow: validate required inputs, handle failures cleanly, then route based on the identified user role.',
    'Role-based UI: menus and accessible screens must be derived from the logged-in role using structural directives and service-provided mappings.',
    'Ticket handling: enforce visibility/filtering rules in services and render tickets in a standardized table layout (with a clear no-data state).',
    'UI styling guidance: apply highlighting using attribute bindings ([ngClass]/[ngStyle]) so rules stay declarative and consistent.',
    'Reusable directive usage: use the hover/row interaction directive pattern to avoid duplicating DOM interaction logic across tables/pages.',
    'Pipe usage guidance: prefer built-in formatting pipes and use the custom formatting pipe for readable status labels when needed.',
    'Folder structure: keep code organized into core (services/models/components), features (business screens), and layouts for scalability.',
  ];
 
  public readonly mockUsers = MockData.users;
  public readonly mockMenus = MockData.menus;
  public readonly mockRoleMenuMapping = MockData.roleMenuMapping;
  public readonly mockTickets = MockData.tickets;
 
  public readonly evaluationItems: EvaluationItem[] = [
    { id: 'ng-on-init', label: 'ngOnInit', checked: false },
    { id: 'ng-on-changes', label: 'ngOnChanges', checked: false },
    { id: 'ng-after-view-init', label: 'ngAfterViewInit', checked: false },
    { id: 'ng-on-destroy', label: 'ngOnDestroy', checked: false },
    { id: 'data-load-only-in-ng-on-init', label: 'Data load only in ngOnInit', checked: false },
    { id: 'ng-on-changes-reacts-to-filter-changes', label: 'ngOnChanges reacts to filter changes', checked: false },
    { id: 'ng-after-view-init-for-table-dialog', label: 'ngAfterViewInit for MatTable / MatDialog', checked: false },
    { id: 'manual-subscriptions-unsubscribed', label: 'Manual subscriptions unsubscribed', checked: false },
    { id: 'user-service-exists', label: 'UserService exists', checked: false },
    { id: 'user-service-used', label: 'UserService actually used', checked: false },
    { id: 'ticket-service-exists', label: 'TicketService exists', checked: false },
    { id: 'ticket-service-used', label: 'TicketService used', checked: false },
    { id: 'menu-service-exists', label: 'MenuService exists', checked: false },
    { id: 'filter-state-service-exists', label: 'FilterStateService exists', checked: false },
    { id: 'no-filtering-logic-in-components', label: 'Components contain no filtering logic', checked: false },
    { id: 'components-consume-observables', label: 'Components only consume Observables', checked: false },
    { id: 'business-logic-in-services', label: 'Business logic in services', checked: false },
    { id: 'services-return-observables', label: 'Services return Observables', checked: false },
    { id: 'users-observable', label: 'Users → Observable', checked: false },
    { id: 'tickets-observable', label: 'Tickets → Observable<Ticket[]>', checked: false },
    { id: 'filters-observable', label: 'Filters → Observable', checked: false },
    { id: 'rxjs-of', label: 'RxJS: of', checked: false },
    { id: 'rxjs-map', label: 'RxJS: map', checked: false },
    { id: 'rxjs-filter', label: 'RxJS: filter', checked: false },
    { id: 'rxjs-scan', label: 'RxJS: scan', checked: false },
    { id: 'rxjs-switch-map', label: 'RxJS: switchMap', checked: false },
    { id: 'no-nested-subscriptions', label: 'No nested subscriptions', checked: false },
    { id: 'role-filter-change-reloads-tickets', label: 'Role/filter change reloads tickets', checked: false },
    { id: 'from-event-usage', label: 'fromEvent usage', checked: false },
    { id: 'debounce-time-search', label: 'debounceTime (search)', checked: false },
    { id: 'throttle-time-chips', label: 'throttleTime (chips)', checked: false },
    { id: 'search-as-stream', label: 'Search as stream', checked: false },
    { id: 'chip-clicks-as-stream', label: 'Chip clicks as stream', checked: false },
    { id: 'reactive-streams-only', label: 'Reactive streams only (no click logic)', checked: false },
    { id: 'behavior-subject-used', label: 'BehaviorSubject used', checked: false },
    { id: 'behavior-subject-logged-in-user', label: 'BehaviorSubject: logged-in user', checked: false },
    { id: 'behavior-subject-active-role', label: 'BehaviorSubject: active role', checked: false },
    { id: 'behavior-subject-selected-filter', label: 'BehaviorSubject: selected filter', checked: false },
    { id: 'subject-used', label: 'Subject used', checked: false },
    { id: 'subject-ticket-refresh', label: 'Subject: ticket refresh', checked: false },
    { id: 'subject-feedback-submitted', label: 'Subject: feedback submitted', checked: false },
    { id: 'subject-assignment-completed', label: 'Subject: assignment completed', checked: false },
    { id: 'automatic-state-reaction', label: 'Automatic state reaction', checked: false },
    { id: 'async-pipe-2-sections', label: 'AsyncPipe (≥2 UI sections)', checked: false },
    { id: 'signal', label: 'signal', checked: false },
    { id: 'computed-ticket-counts', label: 'computed() ticket counts', checked: false },
    { id: 'effect-role-filter', label: 'effect() for role/filter', checked: false },
    { id: 'signals-alongside-rxjs', label: 'Signals alongside RxJS', checked: false },
    { id: 'folder-structure-preserved', label: 'Folder structure preserved', checked: false },
    { id: 'rxjs-logic-only-in-services', label: 'RxJS logic only in services', checked: false },
  ];
 
  ngOnInit(): void {
    this.restoreEvaluation();
  }
 
  onEvaluationToggle(item: EvaluationItem, checked: boolean): void {
    item.checked = checked;
    this.persistEvaluation();
  }
 
  private persistEvaluation(): void {
    if (!this.isBrowserStorageAvailable()) return;
    const state: Record<string, boolean> = {};
    for (const item of this.evaluationItems) state[item.id] = item.checked;
    localStorage.setItem(this.evaluationStorageKey, JSON.stringify(state));
  }
 
  private restoreEvaluation(): void {
    if (!this.isBrowserStorageAvailable()) return;
    const raw = localStorage.getItem(this.evaluationStorageKey);
    if (!raw) return;
 
    try {
      const parsed = JSON.parse(raw) as Record<string, boolean>;
      for (const item of this.evaluationItems) {
        if (typeof parsed[item.id] === 'boolean') item.checked = parsed[item.id];
      }
    } catch {
      // Ignore invalid saved state
    }
  }
 
  private isBrowserStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}