import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Spinner} from 'components/loader';

export default {
  title: 'Component/Spinner',
  component: Spinner,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Example = Template.bind({});
Example.args = {size: 1};
