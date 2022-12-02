import { createStyles } from '@mantine/core'

export const aspectStyles = createStyles(theme => ({
  image: {
    // maxWidth: []
    // img: {
    //   height: 'auto',
    //   maxWidth: '100%',
    // },
  },
  unstyledButton: {
    alignItems: 'center',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderRadius: theme.radius.md,
    display: 'flex',
    flexDirection: 'column',
    // height: '100px',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}))