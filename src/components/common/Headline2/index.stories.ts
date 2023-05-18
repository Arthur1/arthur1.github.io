import type { Meta, StoryObj } from '@storybook/react'

import Headline2 from '.'

const meta: Meta<typeof Headline2> = {
  title: 'common/Headline2',
  component: Headline2,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Headline2>

export const Example: Story = {
  args: {
    children: 'Headline2',
  },
}
