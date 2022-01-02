import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {songList} from 'stories/_dummyData';
import {MyList} from 'views/myList';

export default {
  title: 'Views/MyList',
  component: MyList,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof MyList>;

const Template: ComponentStory<typeof MyList> = (args) => <MyList {...args} />;

export const Example = Template.bind({});
Example.args = {
  songList: (() => {
    let multipliedSongList: any[] = [];
    for (let i = 0; i < 100; i++) {
      multipliedSongList = multipliedSongList.concat(songList);
    }

    return multipliedSongList;
  })(),
  isLoading: false,
};

export const Empty = Template.bind({});
Empty.args = {
  songList: [],
};
