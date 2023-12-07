'use client'

import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
 
const customButton = defineStyle({
  background: '#778D45',
  borderColor:'#778D45',
  color:'#dee5d6',
  _hover:{ bg: '#5f7037' },
  _active:{
    bg: '#475429',
    transform: 'scale(0.98)',
    borderColor: '#ffffff',
  },
  _focus:{
    boxShadow:
      '0 0 1px 2px rgba(52, 76, 17, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  },
  fontFamily: 'Avenir Next',
  fontWeight: 'sans-serif',

})

export const buttonTheme = defineStyleConfig({
  variants: { customButton },
})