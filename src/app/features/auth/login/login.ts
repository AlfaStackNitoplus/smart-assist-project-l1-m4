import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { UserService } from '../../../core/services/user.service';
import { UserRole } from '../../../core/models/user.model';
import { MockData } from '../../../assets/mock-data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private router = inject(Router);
  private userService = inject(UserService);

  username = '';
  password = '';

  onLogin() {
    // Requirement 8: All intelligence moves to Services
    const user = MockData.users.find(
      u => u.email === this.username && u.password === this.password
    );

    if (!user) {
      alert('Invalid email or password');
      return;
    }

    // Requirement 5: Update shared state via BehaviorSubject in UserService
    this.userService.setCurrentUser(user);

    // Requirement 4/8: Use reactive-driven navigation
    const route = this.getRouteByRole(user.role);
    this.router.navigate([route]);
  }

private getRouteByRole(role: UserRole): string {
  // Use standard JS switch inside TypeScript methods
  switch (role) {
    case UserRole.SUPERVISOR: 
      return '/supervisor';
    case UserRole.SUPPORT_ENGINEER: 
      return '/support';
    default: 
      return '/user';
  }
}
}