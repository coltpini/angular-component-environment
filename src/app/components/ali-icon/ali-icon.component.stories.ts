import { AliIconComponent } from './ali-icon.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Icon',
  decorators: [
    moduleMetadata({
      declarations: [AliIconComponent]
    }),
  ],
  parameters: {
    notes: `
      # Icon <ali-icon>
      v1.0.0

      An svg icon component.

      ## inputs
        - **theme** ['light' | 'dark'] : Selects the theme of the pill in light or dark.
        - **value** [string] : The value of the pill. It also displays on the pill.

      ## outputs
        - **remove** [string] : emits the remove event that passes the value of the pill.

      ## future
        - Allow an image to be displayed in the pill.
        - More color variations than light and dark.
    `
  }
};

export const closeIcon = () => ({
  component: AliIconComponent,
  props: {
    type: 'close',
    theme: 'dark'
  },
  template: '<div style="padding:20px; width: 50%;"><ali-icon [type]="type" [theme]="theme"></ali-icon></div>'
});

export const closeIconLight = () => ({
  component: AliIconComponent,
  props: {
    type: 'close',
    theme: 'light',
  },
  template: '<div style="padding:20px; background: var(--purple); width: 50%;"><ali-icon [type]="type" [theme]="theme"></ali-icon></div>'
});

export const searchIcon = () => ({
  component: AliIconComponent,
  props: {
    type: 'search',
    theme: 'dark'
  },
  template: '<div style="padding:20px; width: 50%;"><ali-icon [type]="type" [theme]="theme"></ali-icon></div>'
});

export const classIcon = () => ({
  title: 'class',
  component: AliIconComponent,
  props: {
    type: 'class',
    theme: 'dark'
  },
  template: '<div style="padding:20px; width: 50%;"><ali-icon [type]="type" [theme]="theme"></ali-icon></div>'
});
