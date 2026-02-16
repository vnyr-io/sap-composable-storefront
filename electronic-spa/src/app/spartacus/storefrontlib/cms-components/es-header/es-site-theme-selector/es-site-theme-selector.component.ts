import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteThemeSwitcherComponent } from '@spartacus/storefront';

type ThemeOption = {
  className?: string;
  i18nNameKey?: string;
  name?: string;
};

@Component({
  selector: 'app-es-site-theme-selector',
  standalone: false,
  templateUrl: './es-site-theme-selector.component.html',
  styleUrl: './es-site-theme-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsSiteThemeSelectorComponent extends SiteThemeSwitcherComponent {
  readonly dropdownId = 'es-site-theme-selector';

  getActiveLabel(
    themes: ThemeOption[],
    activeClass: string | null | undefined
  ): string {
    return this.getThemeLabel(this.findActiveTheme(themes, activeClass));
  }

  isThemeActive(
    theme: ThemeOption,
    activeClass: string | null | undefined
  ): boolean {
    return (
      this.normalize(theme.className) === this.normalizeThemeClass(activeClass)
    );
  }

  getThemeLabel(theme?: ThemeOption): string {
    if (!theme) {
      return '';
    }
    return this.humanize(theme.name ?? theme.i18nNameKey ?? theme.className);
  }

  private findActiveTheme(
    themes: ThemeOption[],
    activeClass: string | null | undefined
  ): ThemeOption | undefined {
    return (
      themes?.find(
        (theme) =>
          this.normalize(theme.className) ===
          this.normalizeThemeClass(activeClass)
      ) ?? themes?.[0]
    );
  }

  private humanize(value: string | null | undefined): string {
    const raw = (value ?? '').toString();
    const keyTail = raw.includes('.') ? raw.split('.').pop() || raw : raw;
    const cleaned = keyTail.replace('cx-theme-', '').replace(/-/g, ' ');
    const specialMap: Record<string, string> = {
      highcontrastdark: 'High Contrast Dark',
      highcontrastlight: 'High Contrast Light',
    };
    const compact = this.normalize(cleaned.replace(/\s+/g, ''));
    if (specialMap[compact]) {
      return specialMap[compact];
    }
    return cleaned
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private normalize(value: string | null | undefined): string {
    return (value ?? '').toString().trim().toLowerCase();
  }

  private normalizeThemeClass(value: string | null | undefined): string {
    return this.normalize(value);
  }
}
