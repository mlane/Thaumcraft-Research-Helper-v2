import { Box, SimpleGrid, Text } from '@mantine/core'
import { FC } from 'react'
import { aspects } from '../constants/aspects'
import { Aspect } from './Aspect'

export const Aspects: FC = () => (
  <Box w='100%'>
    <Text align='center' mb='lg' size='lg'>
      Aspects
    </Text>
    <SimpleGrid
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 50 },
        { maxWidth: 'sm', cols: 2, spacing: 50 },
        { maxWidth: 'xs', cols: 1, spacing: 50 },
      ]}
      cols={5}
      p='xl'
      spacing={50}
    >
      {Object.keys(aspects).map(name => {
        const combinations = aspects[name]
        return <Aspect combinations={combinations} key={name} name={name} />
      })}
    </SimpleGrid>
  </Box>
)
