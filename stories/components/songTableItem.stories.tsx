import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import SongTableItem from 'components/songTable/SongTableItem';
import {songList} from 'stories/_dummyData';

export default {
  title: 'Component/SongTableItem',
  component: SongTableItem,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof SongTableItem>;

const Template: ComponentStory<typeof SongTableItem> = (args) => (
  <SongTableItem {...args} />
);

export const Example = Template.bind({});
Example.args = {
  song: songList[0],
};
