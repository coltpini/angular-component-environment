
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AliMultiselectComponent } from './ali-multiselect.component';
import { AliIconComponent } from '../ali-icon/ali-icon.component';
import { AliPillComponent } from '../ali-pill/ali-pill.component';
import { AliRevealingPanelComponent } from '../ali-revealing-panel/ali-revealing-panel.component';
import { AliListItemComponent } from '../ali-list-item/ali-list-item.component';

export default {
  title: 'Multiselect',
  decorators: [
    moduleMetadata({
      declarations: [
        AliIconComponent,
        AliPillComponent,
        AliRevealingPanelComponent,
        AliListItemComponent
      ]
    }),
  ],
  parameters: {
    notes: `
      # Multiselect <ali-multiselect>
      v1.0.0

      An input for selecting multiple values from a set list.

      ## inputs
        - **value** [string[]] : an array of the selected values.
        - **options** [string[]] : an array of the values that can be selected from.
        - **label** [string] : the label that is shown above the selection element.
        - **placeholder** [string] : text that is show in the box when no value is selected and it is not focused.

      ## outputs
        - **change** [string[]] : Emitted when a value is added or removed. It passes an array of all the current values.

      ## future
        - BUG - blur needs to close the set of options
        - BUG - the panel needs to overlap the content below.
        - Allow for a more complex data set as well as an array of string.
        - allow for a grouping of items to choose from
        - add debounce for limiting the number of repaints with filtering.
        - keyboard integration of selection options.
        - onFilter event for needed interaction when a filter is fired.
        - Selects the first result on filter, enter would then choose that value.
    `
  }
};

const simpleData = ['Match set 1', 'Match set 2', 'Match 3', 'Match set 4', 'Match 5'];

// TODO: support complex data set.
const complexData = [
  {
    label: 'students',
    list: [
      {
        id: '1510905',
        name: 'Hayleigh Edwards',
        first_name: 'Hayleigh',
        last_name: 'Edwards',
        avatar_attachment_id: 'https://my.otus.com/assets/images/placeholder-profile-image.png'
      },
      {
        id: '1882243',
        name: 'Pema Edwards',
        first_name: 'Pema',
        last_name: 'Edwards',
        avatar_attachment_id: 'https://my.otus.com/assets/images/placeholder-profile-image.png'
      },
      {
        id: '1872920',
        name: 'Thinley Edwards',
        first_name: 'Thinley',
        last_name: 'Edwards',
        avatar_attachment_id: 'https://my.otus.com/assets/images/placeholder-profile-image.png'
      },
      {
        id: '91431',
        name: 'Edwardo Flinders',
        first_name: 'Edwardo',
        last_name: 'Flinders',
        avatar_attachment_id: 'https://my.otus.com/assets/images/placeholder-profile-image.png'
      },
      {
        id: '90935',
        name: 'Edward Meekins',
        first_name: 'Edward',
        last_name: 'Meekins',
        avatar_attachment_id: 'https://my.otus.com/assets/images/placeholder-profile-image.png'
      }
    ]
  },
  {
    label: 'Student Groups',
    list: [
      {
        id: '43875',
        title: ' Project Group 1',
        size: '100'
      },
      {
        id: '43876',
        title: ' Project Group 2',
        size: '10'
      },
      {
        id: '43877',
        title: ' Project Group 3',
        size: '14'
      },
      {
        id: '43877',
        title: ' Project Group 4',
        size: '90'
      }
    ]
  },
  {
    label: 'Classes',
    list: [
      {
        id: '1',
        title: 'Math 101',
        size: '14'
      },
      {
        id: '2',
        title: 'Science 101',
        size: '30'
      },
      {
        id: '3',
        title: 'History 101',
        size: '25'
      },
      {
        id: '43877',
        title: 'English 101',
        size: '32'
      }
    ]
  }
];

export const simpleDataset = () => ({
  component: AliMultiselectComponent,
  props: {
    value: ['Match set 1', 'Match set 2'],
    options: simpleData,
    label: 'Simple Label',
    placeholder: 'Search',
    change: action('changed')
  }
});

