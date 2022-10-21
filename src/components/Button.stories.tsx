import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Clique aqui!',
  },
  argTypes: {
  }
} as Meta<ButtonProps>

// para o storybook precisamos exportar uma variante que não seja a padrão 
export const Default: StoryObj<ButtonProps> = {}
