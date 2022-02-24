import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MyComponentComponent } from './my-component.component';

export default {
  title: 'MyComponentComponent',
  component: MyComponentComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MyComponentComponent>;

const Template: Story<MyComponentComponent> = (args: MyComponentComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}