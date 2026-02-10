import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { MockData } from '../../assets/mock-data';
import { Menu } from '../models/menu.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Requirement 5: BehaviorSubject for the currently logged-in user
  // Initialized with a mock Support Engineer (U008) for testing purposes
  private userSubject = new BehaviorSubject<User | null>(MockData.users.find(u => u.userId === 'U008') || null);

  // Requirement 3: Data Source as Observable
  public user$ = this.userSubject.asObservable();

  /**
   * Requirement 3 & 6: Returns a stream of menu items based on the user's role.
   * Used with AsyncPipe in the Sidebar/Header component.
   */
  public getMenuByRole(): Observable<Menu[]> {
    return this.user$.pipe(
      map(user => {
        if (!user) return [];
        // Find the mapping for the user's role
        const mapping = MockData.roleMenuMapping.find(m => m.role === user.role);
        if (!mapping) return [];
        // Return only the menus that match the mapped IDs
        return MockData.menus.filter(menu => mapping.menuIds.includes(menu.menuId));
      })
    );
  }

  /**
   * Updates the global user state (e.g., after a login simulation)
   */
  setCurrentUser(user: User) {
    this.userSubject.next(user);
  }

  /**
   * Helper to get the current snapshot of the user (non-reactive)
   */
  getCurrentUserValue(): User | null {
    return this.userSubject.value;
  }
}
