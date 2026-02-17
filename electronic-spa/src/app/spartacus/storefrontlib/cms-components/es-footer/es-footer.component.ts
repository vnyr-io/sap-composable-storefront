import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-es-footer',
  standalone: false,
  templateUrl: './es-footer.component.html',
  styleUrl: './es-footer.component.scss',
})
export class EsFooterComponent {
  readonly year = new Date().getFullYear();

  readonly sections: FooterSection[] = [
    {
      title: 'Shop',
      links: [
        { label: 'New Arrivals', href: '/c/new-arrivals' },
        { label: 'Best Sellers', href: '/c/best-sellers' },
        { label: 'Deals', href: '/c/deals' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Shipping', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Stores', href: '/stores' },
      ],
    },
  ];
}
