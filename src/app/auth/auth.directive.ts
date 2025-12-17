import { 
  Directive, 
  effect, 
  input, 
  inject, 
  TemplateRef,
  ViewContainerRef } from '@angular/core';

import type { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('SHOW ELEMENT');
      } else {
        console.log('HIDE ELEMENT');
      };
    })
  }
}
