import { Image, Text, UnstyledButton } from '@mantine/core'
import { FC } from 'react'
import { aspectStyles } from './aspectStyles'

interface AspectProps {
  combinations: (never | string)[]
  isNameHidden?: boolean
  name: string
}

export const Aspect: FC<AspectProps> = ({
  combinations,
  isNameHidden = true,
  name,
}) => {
  const { classes } = aspectStyles()

  return (
    <UnstyledButton className={classes.unstyledButton}>
      {!isNameHidden && (
        <Text align='center' size='md' mb={2}>
          {name}
        </Text>
      )}
      <Image
        alt={`${name} aspect image`}
        className={classes.image}
        fit='contain'
        src={require(`../images/aspects/${name}.png`)}
      />
    </UnstyledButton>
  )
}
