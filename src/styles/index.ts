import { createStitches } from '@stitches/react'

export const { styled, globalCss, css, keyframes, createTheme, theme } =
  createStitches({
    theme: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',

        success: '#34D399',
        danger: '#F43F5E',
        warning: '#FACC15',

        'primary-gradient': 'linear-gradient(90deg, #38BDF8, #818CF8)',
        'danger-gradient': 'linear-gradient(90deg, #F43F5E, #BE123C)',

        'sky-400': '#38BDF8',

        'zinc-400': '#A1A1AA',
        'zinc-600': '#52525B',
        'zinc-800': '#27272A',
        'zinc-950': '#09090B',
      },

      fonts: {
        body: 'Helvetica, sans-serif',
      },

      fontSizes: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },

      fontWeights: {
        regular: '400',
        bold: '700',
      },

      radii: {
        xs: '4px',
        sm: '8px',

        full: '100%',
      },

      sizes: {
        full: '100%',
        'full-h': '100vh',
        'full-w': '100vw',

        8: '2rem',
        10: '2.5rem',
        14: '3.5rem',
        16: '4rem',
        40: '10rem',
        60: '15rem',
        80: '20rem',
        120: '30rem',
        160: '40rem',
      },

      space: {
        1: '0.25rem',
        2: '0.5rem',
        4: '1rem',
        8: '2rem',
        10: '2.5rem',
        16: '4rem',
      },
    },
  })