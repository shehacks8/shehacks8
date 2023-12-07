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



export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
<Center>
    <Box 
      textAlign='center' 
      // pt = "10px"
      backgroundImage="/homepage/background/footer.png"
      backgroundSize={"100%"}
      backgroundRepeat= "no-repeat"
      backgroundBlendMode={"multiply"}
      w = "100%"
      // opacity={"0.5"}
      backgroundColor={"#ABA48C"}
      >

    <Heading
    color="#FFFFFF"
    size = {useBreakpointValue({ "2xl": '4xl', xl: '4xl', lg: '2xl', md: '2xl', sm: 'lg', base: 'md'})} 
    pt={useBreakpointValue({ "2xl": '250px', lg: '100px', md: '55px', sm: '55px', base: ''})}    
    > Connect with us</Heading>
    <Text 
      color = "#FFFFFF" 
      fontSize = {useBreakpointValue({ lg: 'xl', md: 'lg', sm: 'sm', base: '8px'})} 
      pt=""
      >
      Shoot us an email at wits.uwo@gmail.com!
    </Text>
    <Center>
      <HStack 
        pb = "100px"
        pt={useBreakpointValue({ "2xl": '50px', lg: '30px', md: '25px', sm: '0px', base: '0px'})}    

        >
        <Link href = "https://www.facebook.com/shehacks.uwo/">
            <IconButton
              aria-label='Facebook'
              variant= "outline"
              colorScheme='blackAlpha'
              fontSize= {useBreakpointValue({ lg: '45px', md: '35px', sm: '25px', base: '15px'})} 
              size= {useBreakpointValue({ lg: 'lg', md: 'md', sm: 'sm', base: 'xs'})} 
              icon={<FaFacebookSquare />}
            />
          </Link>
          <Spacer/>
          <Link href="https://www.instagram.com/wits.uwo/">
            <IconButton
              aria-label='instagram'
              variant= "outline"
              colorScheme='blackAlpha'
              fontSize= {useBreakpointValue({ lg: '45px', md: '35px', sm: '25px', base: '15px'})} 
              size= {useBreakpointValue({ lg: 'lg', md: 'md', sm: 'sm', base: 'xs'})} 
              icon={<FaInstagramSquare />}
            />
          </Link>
          <Spacer/>
          <Link href = "mailto:wits.uwo@gmail.com">
            <IconButton
              aria-label='Mail'
              variant= "outline"
              colorScheme='blackAlpha'
              fontSize= {useBreakpointValue({ lg: '45px', md: '35px', sm: '25px', base: '15px'})} 
              size= {useBreakpointValue({ lg: 'lg', md: 'md', sm: 'sm', base: 'xs'})} 
              icon={<ImMail />}
            />
          </Link>
          <Spacer/>
          <Link href = "https://ca.linkedin.com/company/uwowits">
            <IconButton
              aria-label='Linkedin'
              variant= "outline"
              colorScheme='blackAlpha'
              fontSize= {useBreakpointValue({ lg: '50px', md: '40px', sm: '30px', base: '20px'})} 
              size= {useBreakpointValue({ lg: 'lg', md: 'md', sm: 'sm', base: 'xs'})} 
              icon={<FaLinkedin />}
            />
          </Link>
      </HStack>
    </Center>
    </Box>
  </Center>

  )
};