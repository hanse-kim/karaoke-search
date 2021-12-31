import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from 'components/button';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Example = Template.bind({});
Example.args = {
  width: '200px',
  height: '40px',
  label: 'Button',
};
