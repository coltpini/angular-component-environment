import { AliPillComponent } from './ali-pill.component';
import { AliIconComponent } from '../ali-icon/ali-icon.component';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pill',
  decorators: [
    moduleMetadata({
      declarations: [AliPillComponent, AliIconComponent]
    }),
  ],
  parameters: {
    notes: `
      # Pill <ali-pill>
      v1.0.0

      Used as a tag or other removable bit of text. This does not self remove but emits a remove event that can be used to remove it.

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


export const darkPill = () => ({
  component: AliPillComponent,
  props: {
    value: 'Milton Ace',
    theme: 'dark',
    remove: action('remove')
  }
});

export const lightPill = () => ({
  component: AliPillComponent,
  props: {
    value: 'Selection',
    theme: 'light',
    remove: action('remove')
  }
});
