import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SearchResult} from 'views/searchResult';
import {songList} from 'stories/_dummyData';

export default {
  title: 'Views/SearchResult',
  component: SearchResult,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Example = Template.bind({});
Example.args = {
  songList: songList,
  keyword: '거짓말',
};

export const Empty = Template.bind({});
Empty.args = {
  songList: [],
  keyword: '거짓말',
};