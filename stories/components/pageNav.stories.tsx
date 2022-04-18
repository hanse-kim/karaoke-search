import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PageNav} from 'components/pageNav';

export default {
  title: 'Component/PageNav',
  component: PageNav,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof PageNav>;

const Template: ComponentStory<typeof PageNav> = (args) => (
  <PageNav {...args} />
);

export const Example = Template.bind({});
Example.args = {currPage: 1, setPage: (page: number) => {}};
