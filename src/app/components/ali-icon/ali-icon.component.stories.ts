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
        - **type** [string] : The name of the icon to be used.

      ## future
        - add more icons.
        - show icon list with names as a first story.
        - add more colors.
    `
  }
};

const getTemplate = (isDark = false) =>
  `<ali-icon style="${isDark ? `background: var(--theme-100);` : ``}height: 3em; padding: 1em;" [type]="type" [theme]="theme"></ali-icon>`;

export const closeIcon = () => ({
  component: AliIconComponent,
  props: {
    type: 'close',
    theme: 'dark'
  },
  template: getTemplate()
});

export const closeIconLight = () => ({
  component: AliIconComponent,
  props: {
    type: 'close',
    theme: 'light',
  },
  template: getTemplate(true)
});

export const searchIcon = () => ({
  component: AliIconComponent,
  props: {
    type: 'search',
    theme: 'dark'
  },
  template: getTemplate()
});

export const classIcon = () => ({
  title: 'class',
  component: AliIconComponent,
  props: {
    type: 'class',
    theme: 'dark'
  },
  template: getTemplate()
});
