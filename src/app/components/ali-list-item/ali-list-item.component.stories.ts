import { AliListItemComponent } from './ali-list-item.component';
import { AliIconComponent } from '../ali-icon/ali-icon.component';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

export default {
  title: 'List Item',
  parameters: {
    notes: `
      # List Item <ali-list-item>
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


export const textItem = () => ({
  component: AliListItemComponent,
  props: {
    value: 'A value'
  }
});

export const selectedItem = () => ({
  component: AliListItemComponent,
  props: {
    value: 'A value',
    active: true
  }
});
