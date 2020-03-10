import { moduleMetadata } from '@storybook/angular';
import { AliRevealingPanelComponent } from './ali-revealing-panel.component';

export default {
  title: 'Revealing Panel',
  decorators: [
    moduleMetadata({
      declarations: [AliRevealingPanelComponent]
    }),
  ],
  parameters: {
    notes: `
      # Revealing Panel <ali-revealing-panel>
      v1.0.0

      A panel that can be shown and hidden.

      ## inputs
        - **fill** [boolean] : Removes the default padding on the panel container.
        - **expanded** [boolean] : Expands or contracts the panel (aria enabled).
        - **trim** [boolean] : trims the connecting border so the panel appears to sit flush.

      ## future
        - **position** ['top' | 'left' | 'bottom' | 'right'] : Selects the position where the panel will be attached to and where it will reveal from.
        - trim will trim the border corresponding to the position of the panel.
        - ability to animate the open and close.
    `
  }
};

const getPanel = () => `
<div
  style="
    width: 30em;
    padding: 2em;
  "
>
  <ali-revealing-panel [fill]="fill" [position]="position" [expanded]="expanded">
    <p>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec
      sed odio dui. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl
      consectetur et. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna
      mollis ornare vel eu leo.
    </p>
    <p>
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
      lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
  </ali-revealing-panel>
</div>
`;

export const top = () => ({
  component: AliRevealingPanelComponent,
  props: {
    expanded: true
  },
  template: getPanel()
});

export const fill = () => ({
  component: AliRevealingPanelComponent,
  props: {
    expanded: true,
    fill: 'true'
  },
  template: getPanel()
});

export const collapsed = () => ({
  component: AliRevealingPanelComponent,
  props: {
  },
  template: getPanel()
});

