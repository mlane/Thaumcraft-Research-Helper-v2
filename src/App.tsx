import { Container, MantineProvider } from '@mantine/core'
import { Aspects } from './components/Aspects'

const App = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Container
      py='lg'
      size='lg'
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Aspects />
    </Container>
  </MantineProvider>
)

export default App
