import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SvgLayoutComponent } from './svg-layout.component';
import {SvgPartModule} from '@workspace/svg-part'

export default {
  title: 'SvgLayoutComponent',
  component: SvgLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [SvgPartModule],
    })
  ],
} as Meta<SvgLayoutComponent>;

const Template: Story<SvgLayoutComponent> = (args: SvgLayoutComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  viewbox: {
    minx: 0,
    miny: 0,
    width: 400,
    height: 400
  },
  svgLogoRatio: 1,
  svgFillValueB:'#F92772',
  svgSPoint:{ x: 141.653, y: 197.0 },
  svgTPoint:{ x: 167.487, y: 197.0 },
  svgUPoint:{ x: 276.004, y: 0.0 },
  svgVPoint:{ x: 250.169, y: 0.0 },

}