'use client'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { 
  Heading, 
  Text, 
  Box,
  HStack,
  Center,
  useDisclosure,  
  Link,
  Spacer,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'

import {InstagramIcon, FacebookIcon, LinkedInIcon, EmailIcon, LinkedInClear} from './icons'



export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
<Center>
    <Box 
      textAlign='center' 
      // pt = "10px"
      backgroundImage="/homepage/background/footer.svg"
      backgroundSize={"100%"}
      backgroundRepeat= "no-repeat"
      backgroundBlendMode={"multiply"}
      w = "100%"
      // opacity={"0.5"}
      backgroundColor={"#B2AD98"}
      >

    <Heading
    color="#FFFFFF"
    size = {{ "2xl": '4xl', xl: '4xl', lg: '2xl', md: '2xl', sm: 'lg', base: 'md'}} 
    pt={{ "2xl": '250px', lg: '100px', md: '55px', sm: '55px', base: ''}}    
    > Connect with us</Heading>
    <Text 
      color = "#FFFFFF" 
      fontSize = {{ lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}} 
      pt=""
      >
      Shoot us an email at wits.uwo@gmail.com!
    </Text>
    <Center>
      <HStack 
        pb = "100px"
        pt={{ "2xl": '50px', lg: '30px', md: '25px', sm: '0px', base: '0px'}}    

        >
        <Link href = "https://www.facebook.com/shehacks.uwo/">
            <FacebookIcon/>
          </Link>
          <Spacer/>
          <Link href="https://www.instagram.com/wits.uwo/">
            <InstagramIcon/>
            
          </Link>
          <Spacer/>
          <Link href = "mailto:wits.uwo@gmail.com">
            <EmailIcon/>
          </Link>
          <Spacer/>
          <Link href = "https://ca.linkedin.com/company/uwowits">
            <LinkedInIcon/>
          </Link>

          <Link href = "https://ca.linkedin.com/company/uwowits">
            <LinkedInClear/>
          </Link>
      </HStack>
    </Center>
    </Box>
  </Center>

  )
};