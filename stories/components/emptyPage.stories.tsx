import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import { EmptyPage } from 'components/emptyPage';

export default {
  title: 'Component/EmptyPage',
  component: EmptyPage,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof EmptyPage>;

const Template: ComponentStory<typeof EmptyPage> = (args) => (
  <EmptyPage {...args} />
);

export const Example = Template.bind({});
Example.args = {
  text: '마이리스트가 비어 있습니다!\n노래를 검색 후 마이리스트에 추가해 보세요!',
};
