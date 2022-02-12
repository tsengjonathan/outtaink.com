import React from 'react'
import { ComponentStory } from '@storybook/react'
import MoreStories from '../components/MoreStories'

export default {
  title: 'MoreStories',
  component: MoreStories
}

const Template: ComponentStory<typeof MoreStories> = (args) => <MoreStories {...args} />

export const Default = Template.bind({})
Default.args = {}
