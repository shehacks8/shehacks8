import { extendTheme } from '@chakra-ui/react'
import {buttonTheme} from './components/button'

const fonts = {
    headingFont: `'Palanquin', sans-serif`,
    // headingFont: '"Avenir Next", sans-serif',
    bodyFont: `'Palanquin', sans-serif`,
    inputFont : `'Palanquin', sans-serif`,
    buttonFont : `'Palanquin', sans-serif`,
    placeholderFont: `'Palanquin', sans-serif`,
    abrilFont : `'Abril Fatface', sans-serif`,
    workSansFont: `'Work Sans', sans-serif`,
    poppinsFont: `'Poppins', sans-serif`,
}

/* not currently being used*/
// const fontSize = {
//     headingSize: '100px',
//     bodySize: '2.5vw',
//     inputSize: '2.6vw',

// }

const colors = {
    window: '#AEC670',
    background: '#d6dfcc',
    button: '#11572a',
    text: '#ffffff',
    customScheme:{
        50: "#ffffff",
        100: "#e3e8d9",
        200: "#c8d1b4",
        300: "#adba8f",
        400: "#92a36a",
        500: "#778d45",
        600: "#5f7037",
        700: "#475429",
        800: "#2f381b",
        900: "#171c0d",
      },
    focusColour: '#38a169',
    placeholderText: '#e9f0d7'
}


const overrides = {

    
};

const customTheme = extendTheme({
    overrides,
    fonts,
    colors,
    components: {Button: buttonTheme},

});

export default customTheme;
  
