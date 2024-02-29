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

export default function HackerOlympics() {
  let width1 = [500, 400, 250, 250, 200, 100]
  let height1 = [500, 400, 250, 250, 200, 100]

  if (typeof window !== undefined) {
    return (
      <Box
        backgroundImage="/homepage/background/hackerolympics.svg"
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        bgColor={"#ffffff"}>

        <Box
          ml={"15"}
        >
          <Link href="https://mlh.io/seasons/2023/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black">
            <Image
              src={"https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"}
              height={['45px', '55px', '75px', '100px', '100px', '150px']}
              width={['45px', '55px', '75px', '75px', '75px', '125px']}
              // sizes = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              // width = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}

              alt={"mlh logo"}
            />
          </Link>
        </Box>


        <Center>
          <Heading
            style={abril.style}
            color="#230E05"
            size={{ "2xl": '4xl', xl: '4xl', lg: '2xl', md: '2xl', sm: 'lg', base: 'md' }}
            pt={{ "2xl": '', xl: '40px', lg: '', md: '25px', sm: '0px' }}
          >
            HACKER OLYMPICS
          </Heading>
        </Center>
        <HStack
          // mx="50px"
          mx={{ "2xl": '150px', xl: '125px', lg: '100px', md: '75px', sm: '55px', base: '30px' }}
          pt={{ "2xl": '850px', xl: '550px', lg: '400px', md: '300px', sm: '150px', base: '130px' }}
        >
          <Box>
            <Heading
              style={abril.style}
              color="#F1B927"
              textAlign="left"
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
            >
              What is Hacker Olympics? </Heading>
            <Text
              style={workSans.style}
              color="#FFFFFF"
              fontSize={{ "2xl": '2xl', xl: '2xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }}
              pt="10px"
              textAlign="left">
              The Hacker Olympics is an alternate competition stream for a selected group of beginner hackers who aim to expand their coding skills and tech knowledge during SheHacks.          </Text>
            <Heading
              style={abril.style}
              color="#F1B927"
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
              pt={{ "2xl": '200px', xl: '175px', lg: '125px', md: '65px', sm: '55px', base: '30px' }}
              textAlign="left"
            > Who can participate? </Heading>
            <Text
              style={workSans.style}
              color="#FFFFFF"
              fontSize={{ "2xl": '2xl', xl: '2xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }}
              pt="10px"
              textAlign="left">
              First-time hackers with little-to-no coding experience.
            </Text>
            <Heading
              style={abril.style}
              color="#F1B927"
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
              pt={{ "2xl": '200px', xl: '175px', lg: '125px', md: '65px', sm: '55px', base: '30px' }}
              textAlign="left"> How does Hacker Olympics work? </Heading>
            <Text
              style={workSans.style}
              color="#FFFFFF"
              fontSize={{ "2xl": '2xl', xl: '2xl', lg: '2xl', md: 'md', sm: 'sm', base: '8px' }}
              pt="10px"
              textAlign="left">
              Hackers in this stream will work in teams of 4 to complete a project (“mini hack”) instead of competing in the regular stream. The project will be built upon skills taught in workshops that run during SheHacks+, and are specifically designed for beginners in the Hacker Olympics stream.
            </Text>
          </Box>

          <Box
          // width = {{ '2xl': '500px', xl:'400px', lg: '250px', md:'250px',sm: '200px', base: '100px'}}
          // height = {{ '2xl': '500px', xl:'400px', lg: '250px', md:'250px',sm: '200px', base: '100px'}}
          >
            <Image
              src={"/homepage/blobs/compass.png"}
              // mt = "400px"
              sizes={"(min-width: 0px) 100px ,(min-width: 480px) 200px, (min-width: 768px) 250px, (min-width: 992px) 250px, (min-width: 1280px) 400px, (min-width: 1280px) 500px"}
              // width = {width1}
              // height= {height1}
              width={{ '2xl': '500px', xl: '400px', lg: '250px', md: '250px', sm: '200px', base: '100px' }}
              height={{ '2xl': '500px', xl: '400px', lg: '250px', md: '250px', sm: '200px', base: '100px' }}
              alt={'compass'}
              objectFit={"contain"}
            />
          </Box>
        </HStack>

        <HStack
          mx={{ "2xl": '150px', xl: '125px', lg: '100px', md: '75px', sm: '55px', base: '30px' }}
          pt={{ "2xl": '600px', xl: '220px', lg: '125px', md: '75px', sm: '55px', base: '30px' }}
        >

          <Box
          // width = {{ '2xl': '500px', xl:'400px', lg: '250px', md:'250px',sm: '200px', base: '100px'}}
          // height = {{ '2xl': '500px', xl:'400px', lg: '250px', md:'250px',sm: '200px', base: '100px'}}
          >
            <Image
              src={"/homepage/blobs/map.png"}
              // mt = "400px"
              sizes={"(min-width: 0px) 100px ,(min-width: 480px) 200px, (min-width: 768px) 250px, (min-width: 992px) 250px, (min-width: 1280px) 400px, (min-width: 1280px) 500px"}
              // width = {width1}
              // height= {height1}
              width={{ '2xl': '500px', xl: '400px', lg: '250px', md: '250px', sm: '200px', base: '100px' }}
              height={{ '2xl': '500px', xl: '400px', lg: '250px', md: '250px', sm: '200px', base: '100px' }}
              alt={'map'}
              objectFit={"contain"}
            />
          </Box>
          <Box
            pt={{ "2xl": '450px', xl: '245px', lg: '125px', md: '95px', sm: '70px', base: '50px' }}

          >
            <Heading
              style={abril.style}
              color="#230E05"
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
            > Our Goals <br /><br /> </Heading>
            <Text
              style={workSans.style}
              fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }}
              color="#230E05"
            >
              <b>Bridge the skills gap that drives the lack of diversity in the tech industry</b>
              <br /> <br />
              Women and non-binary individuals face more barriers to exploring tech interests
              and getting the education and experience to enter the tech industry. Hacker Olympics
              is their first step in bridging the gap.<br /><br />
            </Text>
            <Text
              style={workSans.style}
              fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }}
              color="#230E05"
            >
              <b>For beginners interested in tech, spark passion and help them overcome fear of doing.</b>
              <br /> <br />
              Hacker Olympics is all about getting your hands dirty with coding and designing.
              We understand how intimidating it can be to start coding and learning about tech
              (given the enormous number of technology fields).
            </Text>
          </Box>
        </HStack>

        {/* FAQ */}
        <Center>
          <VStack>
            <Heading style={abril.style} color="#230E05"
              mx="50px"
              pt={{ "2xl": '150px', xl: '100px', lg: '75px', md: '75px', sm: '55px', base: '30px' }}
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'xl', base: 'xs' }}
            >Hacker Olympics FAQ</Heading>
            <Box
              pt={{ "2xl": '35px', xl: '20px', lg: '15px', md: '10px', sm: '10px', base: '10px' }}
              px={{ "2xl": '500px', xl: '300px', lg: '150px', md: '80px', sm: '8px', base: '60px' }}>
              <Accordion fontFamily='bodyFont'>
                <AccordionItem>
                  <h2>
                    <AccordionButton h={{ "2xl": '110px', xl: '110px', lg: '70px', md: '65px', sm: '45px', base: '30px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                      <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                        <b>Doesn’t Hacker Olympics defeat the purpose of going to a hackathon: building a hack?</b>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel style={poppins.style} color="#230E05" fontSize={{ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px' }} pb={4}>
                    Not at all! You get to build a mini hack at the end of the weekend that is guided by applying what you&apos;ve learned through workshops. The purpose is to get you comfortable with working collaboratively on projects so that you can return to SheHacks+ (or any other hackathon) feeling comfortable to build a full hack!
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton h={{ "2xl": '85px', xl: '85px', lg: '55px', md: '45px', sm: '17px', base: '16px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                      <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                        <b>What challenges will I compete in?</b>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel style={poppins.style} color="#230E05" fontSize={{ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px' }} pb={4}>
                    TBD, announced as early as a week before the SheHacks+ weekend.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton h={{ "2xl": '85px', xl: '85px', lg: '55px', md: '45px', sm: '16px', base: '16px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                      <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                        <b>What if I don’t have a team of 4?</b>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel style={poppins.style} color="#230E05" fontSize={{ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px' }} pb={4}>
                    Don’t worry! We will match you based on a series of questions so you get the best possible experience working with a team that has a diverse set of skills.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton h={{ "2xl": '85px', xl: '110px', lg: '55px', md: '45px', sm: '45px', base: '30px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                      <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                        <b>Can I be a beginner and compete in the regular stream?</b>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel style={poppins.style} color="#230E05" fontSize={{ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px' }} pb={4}>
                    Of course!
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton h={{ "2xl": '85px', xl: '85px', lg: '55px', md: '45px', sm: '45px', base: '30px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                      <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                        <b>Can I switch into this stream the day of SheHacks+?</b>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel style={poppins.style} color="#230E05" fontSize={{ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px' }} pb={4}>
                    Unfortunately no, you must sign up and be accepted when applications for Hacker Olympics open. If you miss this deadline, there will be a waitlist you can sign up for.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton h={{ "2xl": '110px', xl: '110px', lg: '55px', md: '45px', sm: '45px', base: '30px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                      <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                        <b>Can I compete in both Hacker Olympics and regular stream?</b>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel style={poppins.style} color="#230E05" fontSize={{ "2xl": 'xl', xl: 'xl', lg: 'xl', md: 'xs', sm: '8px', base: '6px' }} pb={4}>
                    Although we would love for everyone to participate in both, we want to ensure you have enough time to complete your projects to the best of your ability. With that being said, you can only sign up for one.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </VStack>
        </Center>
        <Box
          h={{ "2xl": '75px', xl: '150px', lg: '150px', md: '150px', sm: '75px', base: '0px' }}
        >
        </Box>
      </Box>
    )
  }

}








