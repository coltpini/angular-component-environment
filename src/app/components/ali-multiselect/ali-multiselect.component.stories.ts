
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

      ## inputs
        - **position** ['top' | 'left' | 'bottom' | 'right'] : Selects the position where the panel will be attached to and where it will reveal from.

      ## future
        -
    `
  }
};
const simpleData = ['Match set 1', 'Match set 2', 'Match 3', 'Match set 4', 'Match 5'];
const complexData = [];

/*
// student payload
//
{
   "students": [
    {
      "id": "1510905",
      "name": "Hayleigh Edwards",
      "first_name": "Hayleigh",
      "last_name": "Edwards",
      "avatar_attachment_id": "https://my.otus.com/assets/images/placeholder-profile-image.png"
    },
    {
      "id": "1882243",
      "name": "Pema Edwards",
      "first_name": "Pema",
      "last_name": "Edwards",
      "avatar_attachment_id": "https://my.otus.com/assets/images/placeholder-profile-image.png"
    },
    {
      "id": "1872920",
      "name": "Thinley Edwards",
      "first_name": "Thinley",
      "last_name": "Edwards",
      "avatar_attachment_id": "https://my.otus.com/assets/images/placeholder-profile-image.png"
    },
    {
      "id": "91431",
      "name": "Edwardo Flinders",
      "first_name": "Edwardo",
      "last_name": "Flinders",
      "avatar_attachment_id": "https://my.otus.com/assets/images/placeholder-profile-image.png"
    },
    {
      "id": "90935",
      "name": "Edward Meekins",
      "first_name": "Edward",
      "last_name": "Meekins",
      "avatar_attachment_id": "https://my.otus.com/assets/images/placeholder-profile-image.png"
    }
  ]
}

//student groups payload

{
  "student-groups": [
    {
      "id": "43875",
      "title": " Project Group 1",
      "size": "100"
    },
    {
      "id": "43876",
      "title": " Project Group 2",
      "size": "10"
    },
    {
      "id": "43877",
      "title": " Project Group 3",
      "size": "14"    },
    {
      "id": "43877",
      "title": " Project Group 4",
      "size": "90"    }
  ]
}

//classes payload

{
  "classes": [
    {
      "id": "1",
      "title": "Math 101",
      "size": "14"
    },
    {
      "id": "2",
      "title": "Science 101",
      "size": "30"
    },
    {
      "id": "3",
      "title": "History 101",
      "size": "25"    },
    {
      "id": "43877",
      "title": "English 101",
      "size": "32"    }
  ]
}
*/

export const top = () => ({
  component: AliMultiselectComponent,
  props: {
    value: ['one', 'two', 'three'],
    options: simpleData,
    label: 'Simple Label',
    placeholder: 'Search Text Entered',
    change: action('changed')
  }
});

