import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SongTable} from 'components/songTable';
import {songList} from 'stories/_dummyData';

export default {
  title: 'Component/SongTable',
  component: SongTable,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof SongTable>;

const Template: ComponentStory<typeof SongTable> = (args) => (
  <SongTable {...args} />
);

export const Example = Template.bind({});
Example.args = {
  songList: songList,
  isLoading: false,
};
