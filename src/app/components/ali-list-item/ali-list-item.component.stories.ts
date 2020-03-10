import { AliListItemComponent } from './ali-list-item.component';

export default {
  title: 'List Item',
  parameters: {
    notes: `
      # List Item <ali-list-item>
      v1.0.0

      Used as a tag or other removable bit of text. This does not self remove but emits a remove event that can be used to remove it.

      ## inputs
      - **value** [string] : Shows the item as active.
      - **active** ['light' | 'dark'] : Selects the theme of the pill in light or dark.


      ## future
        - Allow an image to be displayed also.
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
