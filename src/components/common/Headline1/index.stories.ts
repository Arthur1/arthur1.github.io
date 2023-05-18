import type { Meta, StoryObj } from '@storybook/react'

import Headline1 from '.'

const meta: Meta<typeof Headline1> = {
  title: 'common/Headline1',
  component: Headline1,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Headline1>

export const Example: Story = {
  args: {
    children: 'Headline1',
  },
}
