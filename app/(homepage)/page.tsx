'use client'
import styles from './page.module.css';
// import NextLink from 'next/link';


import ChakraNextImage from "../components/Image";
import { 
  Heading, 
  Button, 
  Text, 
  Box,
  HStack,
  Center,
  Link,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react'

import { Abril_Fatface, Work_Sans, Poppins } from 'next/font/google'

const abril = Abril_Fatface({ subsets: ['latin'], weight: ['400'] })
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })


export default function HomePage() {
 

  return (
    <Box 
    fontFamily='Lobster'
    backgroundImage="/homepage/background/mainpage.png"
    backgroundSize= "100%"
    backgroundRepeat= "no-repeat"
    bgColor={"#ABA48C"}

    >
      <Link href = "https://mlh.io/seasons/2023/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black">
        <ChakraNextImage
          src = {"https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"}
          height = {useBreakpointValue({ "2xl": '150',xl: '100', lg: '100', md: '75', sm: '55',  base: '45'}, { ssr: false })} 
          width = {useBreakpointValue({ "2xl": '125',xl: '75', lg: '75', md: '75', sm: '55', base: '45'}, { ssr: false })} 
          ml ={"15"}
          alt = {"mlh logo"}
          />
      </Link>
{/* title */}      
      <Box pl="15vw">
        <Heading 
          color = "#FFFFFF" 
          size = {useBreakpointValue({ "2xl": '4xl', xl: '4xl', lg: '2xl', md: '2xl', sm: 'lg', base: 'md'}, { ssr: false })} 
          pt= {useBreakpointValue({ "2xl": '', xl: '40px', lg: '0px', md: '25px', sm: '0px'}, { ssr: false })}
        > she/hacks+ </Heading>
        <Text 
          style={abril.style} 
          color="#8F3F1D" 
          fontSize= {useBreakpointValue({ "2xl": 'xl', xl: 'xl', lg: 'lg', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })} 
          fontWeight='700' 
          pt= {useBreakpointValue({ "2xl": '', xl: '30px', lg: '15px', md: '15px', sm: ''}, { ssr: false })}
          > Hackathon for Women & Non Binary Individuals</Text>
        <Text 
          style={workSans.style} 
          color="#8F3F1D" 
          fontSize = {useBreakpointValue({ "2xl": 'xl', xl: 'xl', lg: 'lg', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })} 
          pb="10px"
          > January 12-14th, 2023</Text>
        <Link href="https://witsuwo.typeform.com/to/EI2tyyPo">
          <Button 
            style={abril.style} 
            size= {useBreakpointValue({ "2xl": 'lg', xl: 'lg', lg: 'lg', md: 'md', sm: 'sm', base: 'xs'}, { ssr: false })} 
            colorScheme="blackAlpha" 
            > APPLY NOW!</Button>
        </Link>
      </Box>


{/* Apply */}
      <HStack 
        // mx="50px"
        mx = {useBreakpointValue({ "2xl": '150px',xl: '125px', lg: '100px', md: '75px', sm: '55px',  base: '30px'}, { ssr: false })} 
        pt= {useBreakpointValue({ "2xl": '850px', xl: '550px', lg: '475px', md: '200px', sm: '100px', base: '100px'}, { ssr: false })}
        >
        <Box>
          <Heading 
            style={abril.style}
            color="#F1B927" 
            size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })} 
            >
             Hack your own adventure 
          </Heading>
          <Text 
            style={workSans.style}
            color = "#FFFFFF" 
            fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} 
            pt="10px"
            > 
              SheHacks+ VIII will give you everything you need to achieve the ultimate 
              creation for an award-winning hack! 
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

{/* What is shehacks */}
      <HStack 
        mx = {useBreakpointValue({ "2xl": '150px',xl: '125px', lg: '100px', md: '75px', sm: '55px',  base: '30px'}, { ssr: false })} 
        pt= {useBreakpointValue({ "2xl": '200px', xl: '175px', lg: '125px', md: '75px', sm: '55px', base: '30px'}, { ssr: false })}
        >
      <ChakraNextImage
        src= {"/homepage/blobs/binoculars.png"}
        width= {useBreakpointValue({ "2xl": '500', xl: '400', lg: '250', md: '250', sm: '200', base: '100'}, { ssr: false })}
        height={useBreakpointValue({ "2xl": '500', xl: '400', lg: '250', md: '250', sm: '200', base: '100'}, { ssr: false })}
      alt={'binoculars'}
        objectFit={"contain"}
      />
      <Box textAlign='left'>
        <Heading 
          style={abril.style}
          color="#F1B927" 
          size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })} 
          >
             What is SheHacks+? 
          </Heading>
        <Text 
        style={workSans.style}
        color = "#FFFFFF" 
        fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pt="10px">
        SheHacks+ is Canada’s biggest all-female and non-binary 36 hour hackathon. Our goal is to 
        collapse gender barriers in tech and empower individuals who have faced discrimination, helping 
        them achieve success and realize their full potential in the industry. Join us alongside a vibrant 
        community of 600+ women+ for an immersive weekend of boundless creativity, innovation and knowledge-sharing.
        </Text>
      </Box>
    </HStack>
{/* hacker olympics */}
    <HStack 
        mx = {useBreakpointValue({ "2xl": '150px',xl: '125px', lg: '100px', md: '75px', sm: '55px',  base: '30px'}, { ssr: false })} 
        pt= {useBreakpointValue({ "2xl": '200px', xl: '175px', lg: '125px', md: '75px', sm: '55px', base: '30px'}, { ssr: false })}
      >
      <Box>
        <Heading 
          style={abril.style}
          color="#F1B927"
          id = "hacker-olympics"
          size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })}
          > 
        Hacker Olympics 
        </Heading>
        <Text style={workSans.style} color = "#FFFFFF" fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pt="10px">
          Wanting to try a hackathon but too scared because all you know is ‘hello world’? Well SheHacks’ beginner
           friendly Hacker Olympics tournament has got you covered! This is a specialized stream of SheHacks tailored 
           for tech newbies who are eager to explore the world of hackathons. Engage in a series of beginner-friendly 
           challenges, connect with fellow enthusiasts and ignite your passion. Let the games begin! 
        </Text>
      </Box>
      <ChakraNextImage
        src= {"/homepage/blobs/map.png"}
        width= {useBreakpointValue({ "2xl": '500', xl: '400', lg: '250', md: '250', sm: '200', base: '100'}, { ssr: false })}
        height={useBreakpointValue({ "2xl": '500', xl: '400', lg: '250', md: '250', sm: '200', base: '100'}, { ssr: false })}
        alt={'map'}
        objectFit={"contain"}
      />
      </HStack>


{/* sponsors */}
    <Center>
      <VStack
      spacing= {useBreakpointValue({ "2xl": '150px', xl: '150px', lg: '75px', md: '50px', sm: '25px', base: '25px'}, { ssr: false })}
      >
        <Heading 
        style={abril.style}
        id='sponsors' 
        color="#230E05"
        size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })}
        pt= {useBreakpointValue({ "2xl": '700px', xl: '500px', lg: '200px', md: '225px', sm: '100px', base: '80px'}, { ssr: false })}
        // mb = "5px"
        >
           SPONSORS 
        </Heading>
{/* plat/gold sponsors */}
        <HStack spacing='75px'>
            <Link href = {"https://jobs.td.com/en-CA/job-opportunities/"} >
              <ChakraNextImage
                src= {"/homepage/sponsors/Td.png"}
                width= {useBreakpointValue({ "2xl": '300', xl: '300', lg: '225', md: '175', sm: '125', base: '75'}, { ssr: false })}
                height={useBreakpointValue({ "2xl": '300', xl: '300', lg: '225', md: '175', sm: '125', base: '75'}, { ssr: false })}
                alt={'td'}
                objectFit={"contain"}
              />
            </Link>
{/* silver+/silver sponsors */}
            <Link href = {"https://www.otpp.com/en-ca/careers/"} >
              <ChakraNextImage
                src= {"/homepage/sponsors/Ontario_Teachers'_Pension_Plan_logo_2021.svg.png"}
                width= {useBreakpointValue({ "2xl": '300', xl: '300', lg: '225', md: '175', sm: '125', base: '75'}, { ssr: false })}
                height={useBreakpointValue({ "2xl": '300', xl: '300', lg: '225', md: '175', sm: '125', base: '75'}, { ssr: false })}
                alt={'Ontario Teachers Pension Plan'}
                objectFit={"contain"}
              />
            </Link>
            <Link href = {"https://www.cppinvestments.com/careers/"} >
              <ChakraNextImage
                src= {"/homepage/sponsors/cpp-investments.png"}
                width= {useBreakpointValue({ "2xl": '350', xl: '350', lg: '275', md: '225', sm: '125', base: '75'}, { ssr: false })}
                height={useBreakpointValue({ "2xl": '350', xl: '350', lg: '275', md: '225', sm: '125', base: '75'}, { ssr: false })}
                alt={'cpp investments'}
                objectFit={"contain"}
              />
            </Link>
        </HStack>

        <HStack spacing='50px'>
            <Link href = {"https://www.ey.com/en_ca/careers"} >
              <ChakraNextImage
                src= {"/homepage/sponsors/EY.svg.png"}
                width= {useBreakpointValue({ "2xl": '300', xl: '300', lg: '225', md: '175', sm: '125', base: '75'}, { ssr: false })}
                height={useBreakpointValue({ "2xl": '250', xl: '250', lg: '200', md: '175', sm: '125', base: '75'}, { ssr: false })}
                alt={'EY'}
                objectFit={"contain"}
              />
            </Link>
{/* bronze sponsors */}
            <Link href = {"https://www.cibc.com/en/about-cibc/careers.html"} >
              <ChakraNextImage
                src= {"/homepage/sponsors/cibc.png"}
                width= {useBreakpointValue({ "2xl": '275', xl: '275', lg: '200', md: '175', sm: '125', base: '75'}, { ssr: false })}
                height={useBreakpointValue({ "2xl": '275', xl: '275', lg: '200', md: '175', sm: '125', base: '75'}, { ssr: false })}
                alt={'cibc'}
                objectFit={"contain"}
              />
            </Link>
{/* others sponsors */}
            <Link href = {"https://entrepreneurship.uwo.ca/for-students/internship/"} >
              <ChakraNextImage
                src= {"/homepage/sponsors/morrissette institue for entrepreneurship.png"}
                width= {useBreakpointValue({ "2xl": '400', xl: '400', lg: '375', md: '250', sm: '150', base: '100'}, { ssr: false })}
                height={useBreakpointValue({ "2xl": '300', xl: '300', lg: '275', md: '225', sm: '125', base: '75'}, { ssr: false })}
                alt={'morrissette institue for entrepreneurship'}
                objectFit={"contain"}
              />
            </Link>
        </HStack>  
    </VStack>
    </Center>
  
  {/* Why sponsor */}
  <HStack
    mx = {useBreakpointValue({ "2xl": '150px',xl: '125px', lg: '100px', md: '75px', sm: '55px',  base: '30px'}, { ssr: false })} 
    pt= {useBreakpointValue({ "2xl": '250px', xl: '75px', lg: '75px', md: '75px', sm: '55px', base: '30px'}, { ssr: false })}

  >
      <Box textAlign='left'>
        <Heading 
          style={abril.style}
          color="#230E05" 
          size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })}
          > 
            Why Sponsor? 
          </Heading>
        <Text 
          style={workSans.style}
          color = "#230E05"
          fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })}
          pt="10px">
          Supporting SheHacks+ means supporting a blend of top Canadian talent to advance 
          their tech careers, and increasing diversity and inclusion in tech. The support of 
          sponsor partners allows women and non-binary university students to learn skills, gain 
          inspiration, and receive mentorship, from industry leaders, peers, and amazing companies 
          like you.
        </Text>
        <Link href="mailto:wits.uwo@gmail.com">
          <Button 
          size= {useBreakpointValue({ "2xl": 'lg', xl: 'lg', lg: 'lg', md: 'md', sm: 'sm', base: 'xs'}, { ssr: false })} 
          mt = "10px" 
          colorScheme="blackAlpha"  
          > 
            LEARN MORE
          </Button>
        </Link>
      </Box>
    </HStack>


  {/* The history of shehacks */}
  <VStack
    
    >
        <Heading 
          style={abril.style}
          color="#230E05" 
          size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })} 
          pt= {useBreakpointValue({ "2xl": '2150px', xl: '1000px', lg: '925px', md: '650px', sm: '325px', base: "325px"})}
          > 
            The History of SheHacks+ 
          </Heading>
        <Text 
          style={workSans.style}
          color = "#230E05"
          mx = {useBreakpointValue({ "2xl": '150px',xl: '125px', lg: '100px', md: '75px', sm: '55px',  base: '30px'}, { ssr: false })} 
          fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} 
          pt= {useBreakpointValue({ "2xl": '40px', xl: '40px', lg: '25px', md: '25px', sm: '0px'}, { ssr: false })}
          >
          SheHacks+ traces its roots back over 7 years ago, 
          emerging as a pioneering event aimed at tackling gender 
          disparities in the tech industry head-on. Inspired by the 
          growing recognition of underrepresentation and gender 
          discrimination, the hackathon started as a grassroots 
          initiative, driven by individuals deeply passionate about 
          fostering diversity and inclusivity in technology.        
        </Text>
        <ChakraNextImage
        src= {"/homepage/logos/history.png"}
        width={useBreakpointValue({ "2xl": '2000', xl: '1500', lg: '1200', md: '1000', sm: '500', base: '1250'}, { ssr: false })}
        height={useBreakpointValue({ "2xl": '900', xl: '900', lg: '650', md: '400', sm: '200', base: '150'}, { ssr: false })}
        // mt={useBreakpointValue({ "2xl": '', xl: '200px', lg: '', md: '75px', sm: '55px', base: '0px'}, { ssr: false })}  
        //sizes = 
        alt={'shehacks history'}
        objectFit={"contain"}
      />
    </VStack>

{/* brought to you by wits */}
<HStack 
  mx = {useBreakpointValue({ "2xl": '150px',xl: '125px', lg: '100px', md: '75px', sm: '55px',  base: '30px'}, { ssr: false })} 
  pt= {useBreakpointValue({ "2xl": '', xl: '30px', lg: '75px', md: '75px', sm: '55px', base: '30px'}, { ssr: false })}
  >
      <ChakraNextImage
        src= {"/homepage/logos/broughttoyoubywits.png"}
        width= {useBreakpointValue({ "2xl": '400', xl: '400', lg: '325', md: '250', sm: '125', base: '100'}, { ssr: false })}
        height={useBreakpointValue({ "2xl": '400', xl: '400', lg: '325', md: '250', sm: '125', base: '50'}, { ssr: false })}
        alt={'brought to you by wits'}
        objectFit={"contain"}
        mr={useBreakpointValue({ "2xl": '50px', xl: '50px', lg: '40px', md: '35px', sm: '10px', base: '0px'}, { ssr: false })}
      />
      <Box textAlign='left'>
        <Text 
          style={workSans.style}
          color = "#230E05"
          fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} 
          >
          <b>Building a future for women+ in tech</b> <br/> <br/>
          WITS+ is a club at Western University that provides 
          its community with initiatives and resources to inspire. 
          We aim to empower women, women-identifying, and non-binary 
          individuals in tech and equip them with the necessary skills 
          to succeed in the industry.
        </Text>
        <Link href = "https://wits-uwo.ca/"> 
          <Button 
            size= {useBreakpointValue({ "2xl": 'lg', xl: 'lg', lg: 'md', md: 'md', sm: 'sm', base: 'xs'}, { ssr: false })} 
            mt = "10px" 
            colorScheme="blackAlpha" 
            > 
              LEARN MORE
            </Button>
        </Link>
      </Box>
    </HStack>

{/* FAQ */}
  <Center>
    <Heading 
      style={abril.style}
      id="faq" 
      mx="50px" 
      pt= {useBreakpointValue({ "2xl": '150px', xl: '100px', lg: '75px', md: '75px', sm: '55px', base: '45px'}, { ssr: false })}   
      size = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs'}, { ssr: false })}
      color = "#230E05"
      >FAQ</Heading>
  </Center>
  <Center>
    <Box 
    color = "#230E05"
      pt= {useBreakpointValue({ "2xl": '35px', xl: '20px', lg: '15px', md: '10px', sm: '10px', base: '10px'}, { ssr: false })}   
      px = {useBreakpointValue({ "2xl": '500px', xl: '300px', lg: '150px', md: '80px', sm: '8px', base: '60px'}, { ssr: false })}>
    <Accordion  
      fontFamily = 'bodyFont'
      >
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
              <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
              <b>What is a Hackathon?</b>
              </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pb={4}>
          A hackathon is a design & coding sprint where “hackers” with both technical and non-technical backgrounds come together to build exciting projects. Throughout the hackathon, you will learn many new skills through workshops, meet like-minded peers, and network with sponsors and mentors. At the end of the weekend, you will get a chance to demo your project and maybe go home with some prizes!
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton style={poppins.style} h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
            <b>Is SheHacks+ 8 in-person?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl',xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pb={4}>
        Yes! This year, SheHacks+ 8 plans to be fully in-person and will abide by provincial covid policies.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
              <b>I don’t know how to code. Can I still come?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pb={4}>
        Of course! The event is designed for first-time hackers to try something new. We actively encourage people from all backgrounds, disciplines, and majors to attend! We have workshops that’ll teach you everything you need to know as well as mentors to guide you along the way. Just bring yourself, a willingness to learn, and a positive attitude!    </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
              <b>Does SheHacks+ cost anything?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pb={4}>
        SheHacks+ is absolutely FREE, due to our generous sponsors! You will have access to a plethora of tools and workshops to help you with your project.    </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
            <b>Do I need to come with a team?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pb={4}>
        You can come solo or with a team. If you already have a team (3-4 people), you can register with them. If you don't have a team but would like one, we can match you up with one before the event.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold'>
            <b>Can I still come if I’m not a woman+?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pb={4}>
        SheHacks+ is designed to be an inclusive space to support female-identifying and non-binary individuals who are interested in technology. As we’re focused on creating a talent pipeline from minorities in tech, this event is specifically created as a place for women+ to explore the tech industry in a supportive way. Otherwise, we welcome people of all genders to participate as a volunteer or mentor. Keep an eye out on our Facebook and website for more information.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left' fontWeight='bold' >
            <b>I'm a recently graduated student. Can I still apply?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pb={4}>
        Yes! We welcome current students as well as new grads to attend SheHacks+. There will be many networking opportunities with our sponsors as well if you are actively searching for a job!
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton h = {useBreakpointValue({ "2xl": '75px', xl: '75px', lg:'50px', md: '30px', sm: '17px', base: '12px'}, { ssr: false })} _expanded={{ bg: '#6E6655', color: 'white' }}>
            <Box style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} as="span" flex='1' textAlign='left'  fontWeight='bold'>
             <b>I don't attend a Canadian university. Can I still apply?</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel style={poppins.style} fontSize = {useBreakpointValue({ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px'}, { ssr: false })} pb={4}>
        Yes! SheHacks+ welcomes students from around the world to participate. The only downside is we may not be able to reimburse your travel costs to our venue.
        </AccordionPanel>
      </AccordionItem>
      
    </Accordion>
    </Box>
  </Center>
  <Box
   h = {useBreakpointValue({ "2xl": '75px', xl: '150px', lg: '150px', md: '150px', sm: '75px', base: '0px'}, { ssr: false })}
  >
  </Box>
  </Box>
 )
}






