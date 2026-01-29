import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatButton],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @Input() develop: string = '';

  constructor(private router: Router) { }
  onUserManual() {
    window.open(
      '/smart-assist-project-l1-m3/#/user-manual',
      '_blank'
    );
  }
  onTechnicalDetails() {
    window.open(
      '/smart-assist-project-l1-m3/#/technical-details-learnt',
      '_blank'
    );
  }
onUsefulResources() {
    window.open(
      '/smart-assist-project-l1-m3/#/resource',
      '_blank'
    );
  }
}
