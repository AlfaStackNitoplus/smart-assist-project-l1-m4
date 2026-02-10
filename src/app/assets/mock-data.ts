import { Menu } from "../core/models/menu.model";
import { RoleMenuMapping } from "../core/models/role-menu.model";
import { Ticket, TicketCategory, TicketStatus, TicketSubCategory } from "../core/models/ticket.model";
import { User } from "../core/models/user.model";


export class MockData {


  static users: User[] = [

    {
      userId: 'U001',
      name: 'Amit Sharma',
      role: 1,
      email: 'amit.sharma@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U002',
      name: 'Priya Verma',
      role: 1,
      email: 'priya.verma@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U003',
      name: 'Rahul Mehta',
      role: 1,
      email: 'rahul.mehta@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U004',
      name: 'Sneha Iyer',
      role: 1,
      email: 'sneha.iyer@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U005',
      name: 'Vikas Reddy',
      role: 1,
      email: 'vikas.reddy@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U006',
      name: 'Neha Kapoor',
      role: 1,
      email: 'neha.kapoor@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U004',
      name: 'Arjun Malhotra',
      role: 1,
      email: 'arjun.malhotra@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U008',
      name: 'Suresh Patil',
      role: 2,
      email: 'suresh.patil@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U009',
      name: 'Kavita Nair',
      role: 2,
      email: 'kavita.nair@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U010',
      name: 'Rajiv Khanna',
      role: 3,
      email: 'rajiv.khanna@smartassist.com',
      password: '12345'

    }

  ];

  static menus: Menu[] = [
    { menuId: 1, menuName: 'Home', icon: 'home', route: '/user/home' },
    { menuId: 2, menuName: 'Create Ticket', icon: 'add_circle', route: '/user/create-ticket' },
    { menuId: 3, menuName: 'My Tickets', icon: 'confirmation_number', route: '/user/my-ticket' },
    { menuId: 4, menuName: 'Track Ticket', icon: 'track_changes', route: '/user/track-ticket' },
    { menuId: 5, menuName: 'Live Chat', icon: 'chat', route: '/user/live-chat' },
    { menuId: 6, menuName: 'AI Assistant', icon: 'smart_toy', route: '/user/ai-assistant' },
    //support
    { menuId: 7, menuName: 'Home', icon: 'home', route: '/support/home' },
    { menuId: 8, menuName: 'My Tickets', icon: 'confirmation_number', route: '/support/support-ticket' },
    { menuId: 9, menuName: 'Track Ticket', icon: 'track_changes', route: '/support/track-ticket' },
    { menuId: 10, menuName: 'Live Chat', icon: 'chat', route: '/support/live-chat' },
    { menuId: 11, menuName: 'AI Assistant', icon: 'smart_toy', route: '/support/ai-assistant' },
    //addmin
    { menuId: 12, menuName: 'Home', icon: 'home', route: '/supervisor/home' },
    { menuId: 13, menuName: 'Report', icon: 'confirmation_number', route: '/supervisor/support-ticket' },
    { menuId: 14, menuName: 'Track Ticket', icon: 'track_changes', route: '/supervisor/track-ticket' },
    { menuId: 15, menuName: 'Live Chat', icon: 'chat', route: '/supervisor/live-chat' },

  ];

  // ROLE ↔ MENU
  static roleMenuMapping: RoleMenuMapping[] = [
    { role: 1, menuIds: [1, 2, 3, 4, 5, 6] },
    { role: 2, menuIds: [7, 8, 9, 10] },
    { role: 3, menuIds: [12, 13, 14, 15] }
  ];

  // TICKETS
  static tickets: Ticket[] = [
    {
      ticketId: 1,
      title: 'Login issue',
      description: 'Unable to login',
      createdByUserId: 'U001',
      priority: 2,
     status: TicketStatus.New, // Required for 'New' count signal
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: new Date().toISOString(), // Use recent dates for "Age" logic
      assignedToUserId: '',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 2,
      title: 'Dashboard slow',
      description: 'Dashboard loading slow',
      createdByUserId: 'U002',
      priority: 1,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-02T10:00:00Z',
      assignedToUserId: 'U009',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 3,
      title: 'Payment failure',
      description: 'Payment not processing',
      createdByUserId: 'U003',
      priority: 1,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-03T10:00:00Z',
      assignedToUserId: 'U009',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 4,
      title: 'Chat not opening',
      description: 'Live chat not opening',
      createdByUserId: 'U004',
      priority: 2,
      status: TicketStatus.New,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-04T10:00:00Z',
      assignedToUserId: '',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 5,
      title: 'Profile error',
      description: 'Profile update failed',
      createdByUserId: 'U005',
      priority: 3,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-05T10:00:00Z',
      assignedToUserId: 'U009',
      rating: 0,
      feedback: ''
    },

    {
      ticketId: 6,
      title: 'Notification missing',
      description: 'Emails not received',
      createdByUserId: 'U006',
      priority: 2,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-06T10:00:00Z',
      assignedToUserId: 'U009',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 7,
      title: 'File upload failed',
      description: 'Upload not working',
      createdByUserId: 'U001',
      priority: 2,
      status: TicketStatus.Resolved,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-07T10:00:00Z',
      assignedToUserId: 'U009',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 8,
      title: 'Session timeout',
      description: 'Auto logout issue',
      createdByUserId: 'U002',
      priority: 3,
      status: TicketStatus.New,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-08T10:00:00Z',
      assignedToUserId: '',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 9,
      title: 'Report export',
      description: 'CSV export not working',
      createdByUserId: 'U003',
      priority: 2,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-09T10:00:00Z',
      assignedToUserId: 'U009',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 10,
      title: 'API error',
      description: 'Server 500 error',
      createdByUserId: 'U004',
      priority: 1,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-10T10:00:00Z',
      assignedToUserId: 'U006',
      rating: 0,
      feedback: ''
    },

    {
      ticketId: 11,
      title: 'Search broken',
      description: 'Search returns empty',
      createdByUserId: 'U005',
      priority: 2,
      status: TicketStatus.New,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-11T10:00:00Z',
      assignedToUserId: '',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 12,
      title: 'Theme issue',
      description: 'Dark mode glitch',
      createdByUserId: 'U006',
      priority: 3,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-12T10:00:00Z',
      assignedToUserId: 'U003',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 13,
      title: 'Form validation',
      description: 'Validation not triggering',
      createdByUserId: 'U001',
      priority: 2,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-13T10:00:00Z',
      assignedToUserId: 'U004',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 14,
      title: 'Slow reports',
      description: 'Report page slow',
      createdByUserId: 'U002',
      priority: 1,
      status: TicketStatus.Resolved,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-14T10:00:00Z',
      assignedToUserId: 'U005',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 15,
      title: 'Database sync',
      description: 'Data mismatch issue',
      createdByUserId: 'U003',
      priority: 2,
      status: TicketStatus.Closed,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-15T10:00:00Z',
      assignedToUserId: 'U006',
      rating: 2,
      feedback: 'Great job resolving the issue!'
    },

    {
      ticketId: 16,
      title: 'OTP delay',
      description: 'OTP received late',
      createdByUserId: 'U004',
      priority: 2,
      status: TicketStatus.New,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-16T10:00:00Z',
      assignedToUserId: '',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 17,
      title: 'Billing error',
      description: 'Incorrect billing',
      createdByUserId: 'U005',
      priority: 1,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-17T10:00:00Z',
      assignedToUserId: 'U003',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 18,
      title: 'Push notifications',
      description: 'Push not working',
      createdByUserId: 'U006',
      priority: 3,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-18T10:00:00Z',
      assignedToUserId: 'U004',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 19,
      title: 'Menu glitch',
      description: 'Sidebar not responsive',
      createdByUserId: 'U001',
      priority: 2,
      status: TicketStatus.Resolved,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-19T10:00:00Z',
      assignedToUserId: 'U005',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 20,
      title: 'Email template',
      description: 'Email formatting issue',
      createdByUserId: 'U002',
      priority: 3,
      status: TicketStatus.Closed,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-20T10:00:00Z',
      assignedToUserId: 'U006',
      rating: 5,
      feedback: 'Excellent work on the email template!'
    },

    {
      ticketId: 21,
      title: 'Search delay',
      description: 'Search slow response',
      createdByUserId: 'U003',
      priority: 2,
      status: TicketStatus.New,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-21T10:00:00Z',
      assignedToUserId: '',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 22,
      title: 'Role permission',
      description: 'Access denied issue',
      createdByUserId: 'U004',
      priority: 1,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-22T10:00:00Z',
      assignedToUserId: 'U003',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 23,
      title: 'Logout issue',
      description: 'Logout not working',
      createdByUserId: 'U005',
      priority: 2,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-23T10:00:00Z',
      assignedToUserId: 'U004',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 24,
      title: 'Attachment broken',
      description: 'Files not downloadable',
      createdByUserId: 'U006',
      priority: 3,
      status: TicketStatus.Resolved,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-24T10:00:00Z',
      assignedToUserId: 'U005',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 25,
      title: 'Language issue',
      description: 'Translation missing',
      createdByUserId: 'U001',
      priority: 2,
      status: TicketStatus.Closed,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-25T10:00:00Z',
      assignedToUserId: 'U006',
      rating: 3,
      feedback: 'Good work on the language translation!'
    },

    {
      ticketId: 26,
      title: 'App freeze',
      description: 'Application freezing',
      createdByUserId: 'U002',
      priority: 1,
      status: TicketStatus.New,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-26T10:00:00Z',
      assignedToUserId: '',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 27,
      title: 'Password reset',
      description: 'Reset link expired',
      createdByUserId: 'U003',
      priority: 2,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-27T10:00:00Z',
      assignedToUserId: 'U003',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 28,
      title: 'Video not loading',
      description: 'Tutorial video not playing',
      createdByUserId: 'U004',
      priority: 2,
      status: TicketStatus.Assigned,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-28T10:00:00Z',
      assignedToUserId: 'U004',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 29,
      title: 'Calendar sync',
      description: 'Events not syncing',
      createdByUserId: 'U005',
      priority: 3,
      status: TicketStatus.Resolved,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-29T10:00:00Z',
      assignedToUserId: 'U005',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 30,
      title: 'Data export',
      description: 'Excel export failing',
      createdByUserId: 'U006',
      priority: 2,
      status: TicketStatus.Closed,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-30T10:00:00Z',
      assignedToUserId: 'U006',
      rating: 5,
      feedback: 'good'
    }
  ];

}
