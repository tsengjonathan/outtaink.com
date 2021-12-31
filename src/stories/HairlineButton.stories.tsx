import React from 'react'
import { ComponentStory } from '@storybook/react'
import HairlineButton from '../components/HairlineButton'

export default {
  title: 'HairlineButton',
  component: HairlineButton
}

const Template: ComponentStory<typeof HairlineButton> = (args) => <HairlineButton {...args} />

export const Default = Template.bind({})
Default.args = {
  title: '關於留學，我們有話要說'
}
