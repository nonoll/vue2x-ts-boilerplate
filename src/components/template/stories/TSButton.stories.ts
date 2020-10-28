import Vue, { VueConstructor } from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { ArgTypes } from '@storybook/api';
import { actions } from '@storybook/addon-actions';

import { MyButton } from '../index';

Vue.use(VueCompositionApi);

function FunctionForType() {
  // for type
}

interface Story {
  args?: unknown;
  props?: unknown;
  components?: VueConstructor<Vue>;
  template?: string | unknown;
  bind: typeof FunctionForType.bind;
}

const ExampleButton = {
  title: 'TSExample/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  }
};

const eventsFromObject = actions({
  onClick: 'onClick'
});

export default ExampleButton;

const Template: Story = (_: unknown, { argTypes }: { argTypes: ArgTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  data() {
    return {
      eventsFromObject
    };
  },
  template: '<my-button v-on="eventsFromObject" v-bind="$props" />'
});

export const Primary = Template.bind({
  onClick: () => {
    console.log('Primary onClick...');
  }
});
Primary.args = {
  primary: true,
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button'
};
