import { Meta, StoryObj } from '@storybook/react'
import { Children } from 'react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'meu primeiro componente',

  }
} as Meta<TextProps>

// para o storybook precisamos exportar uma variante que não seja a padrão 
export const Primary: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',

  }
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}
export const CustomComponents: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>mudando a tag para P</p>
    ),
  }
}
