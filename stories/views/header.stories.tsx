import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Header} from 'components/layout/header';

export default {
  title: 'Views/Header',
  component: Header,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Example = Template.bind({});
