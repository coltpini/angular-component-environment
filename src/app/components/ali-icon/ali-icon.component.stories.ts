import { AliIconComponent } from './ali-icon.component';

export default { title: 'Icon' };

export const withText = () => ({
  component: AliIconComponent,
  props: {
    text: 'Hello Button'
  }
});
