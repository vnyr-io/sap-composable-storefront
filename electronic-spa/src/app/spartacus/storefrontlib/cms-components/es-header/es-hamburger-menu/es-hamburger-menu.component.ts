import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HamburgerMenuService } from '@spartacus/storefront';

@Component({
  selector: 'app-es-hamburger-menu',
  standalone: false,
  templateUrl: './es-hamburger-menu.component.html',
  styleUrl: './es-hamburger-menu.component.scss',
})
export class EsHamburgerMenuComponent {
  isExpanded$: Observable<boolean> = this.hamburgerMenuService.isExpanded;

  constructor(private hamburgerMenuService: HamburgerMenuService) {}

  toggle(): void {
    this.hamburgerMenuService.toggle();
  }
}
