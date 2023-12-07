'use client'
import styles from './page.module.css'
import Link from 'next/link'
import ChakraNextImage from "../../components/Image";

import { 
  Heading, 
  Button, 
  Text, 
  Spinner, 
  Stack,
  Image,
  Box,
  HStack,
  Center,
  VStack,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  useBreakpointValue,
  Spacer 
  } from '@chakra-ui/react'

import { Abril_Fatface, Work_Sans, Poppins } from 'next/font/google'

const abril = Abril_Fatface({ subsets: ['latin'], weight: ['400'] })
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function hackerOlympics() {


  return (
    <Box
    backgroundImage="/homepage/background/hackerolympics.png"
    backgroundSize= "100%"
    backgroundRepeat= "no-repeat"
    bgColor={"#7CD5CB"}>

      <Link href = "https://mlh.io/seasons/2023/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black">
        <ChakraNextImage
          src = {"https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"}
          height = {useBreakpointValue({ "2xl": '150',xl: '100', lg: '100', md: '75', sm: '55',  base: '45'}, { ssr: false })} 
          width = {useBreakpointValue({ "2xl": '125',xl: '75', lg: '75', md: '75', sm: '55', base: '45'}, { ssr: false })} 
          ml ={"15"}
          alt = {"mlh logo"}
          />
      </Link>

      <Center>
        <Heading 
        style={abril.style} 
        color="#230E05" 
        size = {useBreakpointValue({ "2xl": '4xl', xl: '4xl', lg: '2xl', md: '2xl', sm: 'lg', base: 'md'}, { ssr: false })} 
        pt= {useBreakpointValue({ "2xl": '', xl: '40px', lg: '', md: '25px', sm: '0px'}, { ssr: false })}  
        >
          HACKER OLYMPICS 
        </Heading>
      </Center>
      <HStack 
        // mx="50px"
        mx = {useBreakpointValue({ "2xl": '150px',xl: '125px', lg: '100px', md: '75px', sm: '55px',  base: '30px'}, { ssr: false })} 
        pt= {useBreakpointValue({ "2xl": '850px', xl: '550px', lg: '400px', md: '300px', sm: '150px', base: '130px'}, { ssr: false })}
        >
        <Box>
        <Heading 
            style={abril.style} 
            color="#F1B927" 
            textAlign="left"
            size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })} 
            > 
            What is HOlympics? </Heading>
          <Text 
            style={workSans.style} 
            color="#FFFFFF" 
            fontSize = {useBreakpointValue({ "2xl": '2xl', xl: '2xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })}
            pt="10px" 
            textAlign="left"> 
            The Hacker Olympics is an alternate competition stream for a selected group of beginner 
            hackers who aim to expand their coding skills and tech knowledge during SheHacks+. 
          </Text>
          <Heading 
            style={abril.style} 
            color="#F1B927" 
            size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })} 
            pt= {useBreakpointValue({ "2xl": '200px', xl: '175px', lg: '125px', md: '65px', sm: '55px', base: '30px'}, { ssr: false })}
            textAlign="left"
          > Who can participate? </Heading>
          <Text 
            style={workSans.style} 
            color="#FFFFFF" 
            fontSize = {useBreakpointValue({ "2xl": '2xl', xl: '2xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })}
            pt="10px"
            textAlign="left"> 
            First-time hackers with little-to-no coding experience. 
          </Text>
          <Heading 
            style={abril.style} 
            color="#F1B927" 
            size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })} 
            pt= {useBreakpointValue({ "2xl": '200px', xl: '175px', lg: '125px', md: '65px', sm: '55px', base: '30px'}, { ssr: false })}
            textAlign="left"> How does Hacker Olympics work? </Heading>
          <Text 
            style={workSans.style} 
            color="#FFFFFF" 
            fontSize = {useBreakpointValue({ "2xl": '2xl', xl: '2xl', lg: '2xl', md: 'md', sm: 'sm', base: '8px'}, { ssr: false })}
            pt="10px" 
            textAlign="left"> 
            Hackers in this stream will work in teams of 4 to complete a series of specially-designed 
            technical challenges instead of competing in the regular stream to build the “perfect” hack. 
            Challenges will be built upon skills taught in workshops that run during SheHacks+.
          </Text>

        </Box>
        <ChakraNextImage
          src= {"/homepage/blobs/compass.png"}
          // mt = "400px"
          width= {useBreakpointValue({ "2xl": '500', xl: '400', lg: '250', md: '250', sm: '200', base: '100'}, { ssr: false })}
          height={useBreakpointValue({ "2xl": '500', xl: '400', lg: '250', md: '250', sm: '200', base: '100'}, { ssr: false })}
          alt={'compass'}
          objectFit={"contain"}
        />
      </HStack>

      <HStack
         mx = {useBreakpointValue({ "2xl": '150px',xl: '125px', lg: '100px', md: '75px', sm: '55px',  base: '30px'}, { ssr: false })} 
          pt= {useBreakpointValue({ "2xl": '600px', xl: '220px', lg: '125px', md: '75px', sm: '55px', base: '30px'}, { ssr: false })}
      >
        
        <ChakraNextImage
          src= {"/homepage/blobs/map.png"}
          width= {useBreakpointValue({ "2xl": '500', xl: '400', lg: '250', md: '250', sm: '200', base: '100'}, { ssr: false })}
          height={useBreakpointValue({ "2xl": '500', xl: '400', lg: '250', md: '250', sm: '200', base: '100'}, { ssr: false })}
          alt={'map'}
          objectFit={"contain"}
          //  mt = "200px"
        />
        <Box>
          <Heading 
          style={abril.style} 
          color="#230E05" 
          size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })} 
          > Our Goals <br/><br/> </Heading>
          <Text 
          style={workSans.style} 
          fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} 
          color="#230E05" 
          > 
            <b>Bridge the skills gap that drives the lack of diversity in the tech industry</b>
            <br/> <br/>
            Women and non-binary individuals face more barriers to exploring tech interests 
            and getting the education and experience to enter the tech industry. Hacker Olympics 
            is their first step in bridging the gap.<br/><br/>
          </Text>
          <Text 
          style={workSans.style} 
          fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })}
          color="#230E05" 
          > 
            <b>For beginners interested in tech, spark passion and help them overcome fear of doing.</b>
            <br/> <br/>
            Hacker Olympics is all about getting your hands dirty with coding and designing. 
            We understand how intimidating it can be to start coding and learning about tech 
            given the enormous number of technology fields.
          </Text>
        </Box>
      </HStack>
       
{/* FAQ */}
<Center>
  <VStack>
    <Heading style={abril.style} color="#230E05"
     mx="50px" 
     pt= {useBreakpointValue({ "2xl": '150px', xl: '100px', lg: '75px', md: '75px', sm: '55px', base: '30px'}, { ssr: false })}   
     size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'xl', base: 'xs'}, { ssr: false })}
    >Hacker Olympics FAQ</Heading>
    <Box 
     pt= {useBreakpointValue({ "2xl": '35px', xl: '20px', lg: '15px', md: '10px', sm: '10px', base: '10px'}, { ssr: false })}   
     px = {useBreakpointValue({ "2xl": '500px', xl: '300px', lg: '150px', md: '80px', sm: '8px', base: '60px'}, { ssr: false })}>
    <Accordion  fontFamily = 'bodyFont'>
      <AccordionItem>
        <h2>
        <AccordionButton h = {useBreakpointValue({ "2xl": '85px', xl: '75px', lg:'63px', md: '55px', sm: '17px', base: '25px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
                <b>Doesn’t Hacker Olympics defeat the purpose of going to a hackathon: building a hack?</b>
              </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} color="#230E05" fontSize = {useBreakpointValue({ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px'}, { ssr: false })} pb={4}>
          Not at all! You get to build a series of mini projects that are guided by applying what you’ve learned through workshops. The purpose is to get you comfortable with working collaboratively on projects so that you can return to SheHacks+ (or any other hackathon) feeling comfortable to build a full hack!
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
              <b>What challenges will I compete in?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} color="#230E05" fontSize = {useBreakpointValue({ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px'}, { ssr: false })} pb={4}>
        TBD, announced as early as a week before the SheHacks+ weekend.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
            <b>What if I don’t have a team of 4?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} color="#230E05"fontSize = {useBreakpointValue({ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px'}, { ssr: false })} pb={4}>
        Don’t worry! We will match you based on a series of questions so you get the best possible experience working with a team that has a diverse set of skills.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '25px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
            <b>Can I be a beginner and compete in the regular stream?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} color="#230E05" fontSize = {useBreakpointValue({ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px'}, { ssr: false })} pb={4}>
        Of course!
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '25px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
            <b>Can I switch into this stream the day of SheHacks+?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} color="#230E05" fontSize = {useBreakpointValue({ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px'}, { ssr: false })} pb={4}>
        Unfortunately no, you must sign up and be accepted when applications for Hacker Olympics open. If you miss this deadline, there will be a waitlist you can sign up for.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
        <AccordionButton h = {useBreakpointValue({ "2xl": '85px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '25px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
            <b>Can I compete in both Hacker Olympics and regular stream?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} color="#230E05" fontSize = {useBreakpointValue({ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px'}, { ssr: false })} pb={4}>
        Although we would love for everyone to participate in both, we want to ensure you have enough time to complete your projects to the best of your ability. With that being said, you can only sign up for one.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </Box>
    </VStack>
    </Center>
    <Box
    h = {useBreakpointValue({ "2xl": '75px', xl: '150px', lg: '150px', md: '150px', sm: '75px', base: '0px'}, { ssr: false })}
    >
    </Box>
    </Box>
 )
  
}




    



