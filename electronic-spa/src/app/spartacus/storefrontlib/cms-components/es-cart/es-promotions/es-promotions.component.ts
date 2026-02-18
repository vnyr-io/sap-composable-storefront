import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-es-promotions',
  standalone: false,
  templateUrl: './es-promotions.component.html',
  styleUrl: './es-promotions.component.scss',
})
export class EsPromotionsComponent {
  @Input() promotions: any[] | null | undefined;
}
