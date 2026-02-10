export enum TicketPriority {
  Low = 1,
  Medium = 2,
  High = 3
}

export enum TicketStatus {
  New = 1,
  Assigned=2,
  Input_Requested=3,
  Resolved = 4,
  Feedback_Received = 5,
  Closed = 6,

}
export enum TicketGroup {
  All = 'All',
  New = 'New',
  Open = 'Open',
  Closed = 'Closed'
}

export interface Ticket {
  ticketId: number;
  createdByUserId: string;
  createdByName?: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
  assignedToUserId?: string;
  assignedToName?: string;
  rating: number;
  feedback: string;
  title: string;
  category: TicketCategory;
  subCategory: TicketSubCategory;
}

export class CreateTicketRequest {
  UserId: string | undefined;
  Title: string | undefined;
  Description: string | undefined;
  Status: TicketStatus | undefined;
  Priority: TicketPriority | undefined;
  // CreatedBy: string | undefined;
  // AssignedToId: string | undefined;
  // AssignedToName: string | undefined;
  Attachment: any | null;

}
export enum TicketCategory {
  Technical = 1,
  Operational = 2,
  Quality = 3
}

export enum TicketSubCategory {
  Incident = 1,
  BugDefect = 2,
  ServiceRequest = 3,
  ChangeRequest = 4,
  AccessPermission = 5,
  DataCorrection = 6,
  BillingIssue = 7,
  EnhancementRequest = 8,
  UsabilityIssue = 9,
  PerformanceIssue = 10
}
