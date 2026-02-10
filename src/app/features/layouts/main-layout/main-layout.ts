import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from '../../../core/components/header/header';
import { Footer } from '../../../core/components/footer/footer';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Menu } from '../../../core/models/menu.model';
import { MockData } from '../../../assets/mock-data';
import { UserRole } from '../../../core/models/user.model';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Footer, RouterModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterOutlet,
    MatListModule,

  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  version: string = 'L1-M4';
  develop: string = 'Smart Assist Team';
  userRole: UserRole;
  userId: string = '';
  constructor(
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe(params => {
      this.userId = params['id'];
    });
    this.userRole = MockData.users.find(u => u.userId === this.userId)?.role || UserRole.END_USER;
  }
  getMenusByRole(): Menu[] {
    const mapping = MockData.roleMenuMapping.find(r => r.role === this.userRole);
    if (!mapping) return [];

    return MockData.menus.filter(menu =>
      mapping.menuIds.includes(menu.menuId)
    );
  }

}
