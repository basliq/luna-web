import {Button as MantineButton} from '@mantine/core'

type ButtonProps = {
  children: string
}

export const Button = ({children}: ButtonProps) => {
  return <MantineButton>{children}</MantineButton>
}
