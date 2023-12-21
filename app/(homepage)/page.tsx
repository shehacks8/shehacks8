'use client'
import styles from './page.module.css';
// import NextLink from 'next/link';
import { Image } from '@chakra-ui/react'
import NextImage from 'next/image'
import ChakraNextImage from "../components/Image";
import bg from '../../public/homepage/background/mainpage.svg'
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

  // let width1 = [ 500, 400, 250,250, 200,100]
  // let height1 =[ 500,  400,  250,  250,  200,  100]

  if (typeof window !== undefined) {
    return (
      <Box
        fontFamily='Lobster'
        backgroundImage="/homepage/background/mainpage.svg"
        backgroundSize="100%"
        
        // backgroundRepeat="repeat-x"
        // backgroundPosition={"center"}
        // backgroundBlendMode={"color"}
        bgColor={"#ABA48C"}

      >
        <Box
          ml={["15", "15", "25", "35", "35", "50",]}
          height={['30px', '40px', '60px', '90px', '90px', '125px']}
          width={['30px', '45px', '70px', '70px', '75px', '100px']} >
          <Link href="https://mlh.io/seasons/2024/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black">

            <Image
              src={"https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"}

              // sizes = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              // width = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}

              alt={"mlh logo"}
            />
          </Link>
        </Box>

        {/* title */}
        <Box pl="15vw">
          <Heading
            color="#FFFFFF"
            size={{ "2xl": '4xl', xl: '4xl', lg: '2xl', md: '2xl', sm: 'lg', base: 'md' }}
            pt={{ "2xl": '', xl: '40px', lg: '0px', md: '25px', sm: '0px' }}
          > &lt;she/hacks+&gt; </Heading>
          <HStack
          >
            <Text
              style={workSans.style}
              color="#FFFFFF"
              fontSize={{ "2xl": 'xl', xl: 'xl', lg: 'lg', md: 'lg', sm: 'sm', base: 'xs' }}
            > Powered By </Text>
            <Link href="https://techtogether.io/">
              <Image
                src={"https://techtogether.io/imgs/logos/lockup_techtogether_color.png"}
                // mt = "400px"
                // sizes = {"(min-width: 0px) 100px ,(min-width: 480px) 200px, (min-width: 768px) 250px, (min-width: 992px) 250px, (min-width: 1280px) 400px, (min-width: 1280px) 500px"}
                // width = {width1}
                // height= {height1}
                width={{ '2xl': '100px', xl: '100px', lg: '75px', md: '75px', sm: '50px', base: '45px' }}
                height={{ '2xl': '25px', xl: '25px', lg: '25px', md: '25px', sm: '25px', base: '15px' }}
                alt={'techtogetherlong'}
                objectFit={"contain"}
              />
            </Link>

          </HStack>
          <Text
            style={abril.style}
            color="#8F3F1D"
            fontSize={{ "2xl": 'xl', xl: 'xl', lg: 'lg', md: 'lg', sm: 'sm', base: 'xs' }}
            fontWeight='700'
            pt={{ "2xl": '', xl: '', lg: '', md: '', sm: '' }}
          > Hackathon for Women & Non Binary Individuals</Text>

          <Text
            style={workSans.style}
            color="#8F3F1D"
            fontSize={{ "2xl": 'xl', xl: 'xl', lg: 'lg', md: 'lg', sm: 'sm', base: 'xs' }}
            pb="10px"
          > January 12-14th, 2024</Text>
          <Link href="https://witsuwo.typeform.com/to/EI2tyyPo">
            <Button
              style={abril.style}
              size={{ "2xl": 'lg', xl: 'lg', lg: 'lg', md: 'md', sm: 'sm', base: 'xs' }}
              colorScheme="blackAlpha"
            > APPLY NOW!</Button>
          </Link>
        </Box>


        {/* Apply */}
        <HStack
          // mx="50px"
          mx={{ "2xl": '150px', xl: '125px', lg: '100px', md: '75px', sm: '55px', base: '30px' }}
          pt={{ "2xl": '850px', xl: '550px', lg: '475px', md: '200px', sm: '100px', base: '100px' }}
        >
          <Box>
            <Heading
              style={abril.style}
              color="#F1B927"
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
            >
              Hack your own adventure
            </Heading>
            <Text
              style={workSans.style}
              color="#FFFFFF"
              fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }}
              pt="10px"
            >
              SheHacks+ VIII will give you everything you need to achieve the ultimate
              creation for an award-winning hack!
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

        {/* What is shehacks */}
        <HStack
          mx={{ "2xl": '150px', xl: '125px', lg: '100px', md: '75px', sm: '55px', base: '30px' }}
          pt={{ "2xl": '200px', xl: '175px', lg: '125px', md: '75px', sm: '55px', base: '30px' }}
        >
          <Box
            minW={{ '2xl': '500px', xl: '400px', lg: '250px', md: '250px', sm: '50px', base: '50px' }}
            minH={{ '2xl': '500px', xl: '400px', lg: '250px', md: '250px', sm: '50px', base: '50px' }}
          >
            <Image
              objectFit={"fill"}
              src={"/homepage/blobs/binoculars.png"}
              // sizes = {"(min-width: 0px) 100px ,(min-width: 480px) 200px, (min-width: 768px) 250px, (min-width: 992px) 250px, (min-width: 1280px) 400px, (min-width: 1536px) 500px"}
              // w = {{ '2xl': '500px', xl:'400px', lg: '250px', md:'250px',sm: '200px', base: '100px'}}
              // h = {{ '2xl': '500px', xl:'400px', lg: '250px', md:'250px',sm: '200px', base: '100px'}}
              alt={'binoculars'}
            />
          </Box>
          <Box textAlign='left'>
            <Heading
              style={abril.style}
              color="#F1B927"
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
            >
              What is SheHacks+?
            </Heading>
            <Text
              style={workSans.style}
              color="#FFFFFF"
              fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pt="10px">
              SheHacks+ is Canada&apos;s biggest all-female and non-binary 36 hour hackathon. Our goal is to
              collapse gender barriers in tech and empower individuals who have faced discrimination, helping
              them achieve success and realize their full potential in the industry. Join us alongside a vibrant
              community of 600+ women+ for an immersive weekend of boundless creativity, innovation and knowledge-sharing.
            </Text>
          </Box>
        </HStack>
        {/* hacker olympics */}
        <HStack
          mx={{ "2xl": '150px', xl: '125px', lg: '100px', md: '75px', sm: '55px', base: '30px' }}
          pt={{ "2xl": '200px', xl: '175px', lg: '125px', md: '75px', sm: '55px', base: '30px' }}
        >
          <Box>
            <Heading
              style={abril.style}
              color="#F1B927"
              id="hacker-olympics"
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
            >
              Hacker Olympics
            </Heading>
            <Text style={workSans.style} color="#FFFFFF" fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pt="10px">
              Wanting to try a hackathon but too scared because all you know is ‘hello world’? Well SheHacks’ beginner
              friendly Hacker Olympics tournament has got you covered! This is a specialized stream of SheHacks tailored
              for tech newbies who are eager to explore the world of hackathons. Engage in a series of beginner-friendly
              challenges, connect with fellow enthusiasts and ignite your passion. Let the games begin!
            </Text>
          </Box>
          <Box
          // w = {{ '2xl': '500px', xl:'400px', lg: '250px', md:'250px',sm: '200px', base: '100px'}}
          // h = {{ '2xl': '500px', xl:'400px', lg: '250px', md:'250px',sm: '200px', base: '100px'}}
          >
            <Image
              src={"/homepage/blobs/map.png"}
              // sizes = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              // width = {width1}
              // height= {height1}
              alt={'map'}
              objectFit={"contain"}
            />
          </Box>
        </HStack>


        {/* sponsors */}
        <Center>
          <VStack
            spacing={{ "2xl": '150px', xl: '150px', lg: '75px', md: '50px', sm: '25px', base: '25px' }}
            pt={{ "2xl": '900px', xl: '400px', lg: '200px', md: '225px', sm: '100px', base: '80px' }}
            px="20px"
          >
            <Heading
              style={abril.style}
              id='sponsors'
              color="#230E05"
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
            // mb = "5px"
            >
              SPONSORS
            </Heading>
            {/* plat/gold sponsors */}
            <HStack spacing='75px'>
              <Link href="https://techtogether.io/">
                <Image
                  sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw"}
                  src={"https://techtogether.io/imgs/logos/lockup_techtogether_color.png"}
                  width={"45vw"}
                  // width={["125px", '125px', '250px', '225px', '300px', '300px']}
                  // height={["35px", '35px', '100px', '225px', '300px', '300px']}
                  alt={'techtogether'}
                  objectFit={"contain"}
                >
                </Image>
              </Link>

            </HStack>
            {/* silver+/silver sponsors */}
            <HStack spacing='3vw'>
              <Link href={"https://jobs.td.com/en-CA/job-opportunities/"} >
                <Image
                  sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  src={"/homepage/sponsors/Td.png"}
                  width={"16vw"}
                  // width={["75px", '125px', '175px', '225px', '300px', '300px']}
                  // height={["75px", '125px', '175px', '225px', '300px', '300px']}
                  alt={'td'}
                  objectFit={"contain"}
                />
              </Link>
              <Link href={"homepage/sponsors/MorningStar.svg"}>
                <Image
                  sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  src={"/homepage/sponsors/Morningstar.svg.png"}
                  width={"26vw"}
                  // width={["75px", '125px', '175px', '225px', '300px', '300px']}
                  // height={["75px", '125px', '175px', '225px', '300px', '300px']}
                  alt={'Morningstar'}
                  objectFit={"contain"}
                />
              </Link>
              <Link href={"https://careers.pointclickcare.com/c/"} >
                <Image
                  sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  src={"/homepage/sponsors/PointClickCare.png"}
                  width={"22vw"}
                  // width={["75px", '125px', '175px', '225px', '300px', '300px']}
                  // height={["75px", '125px', '175px', '225px', '300px', '300px']}
                  alt={'PointClickCare'}
                  objectFit={"contain"}
                />
              </Link>
            </HStack>

            <HStack spacing='5vw'>
              <Link href={"https://www.otpp.com/en-ca/careers/"} >
                <Image
                  src={"/homepage/sponsors/Ontario_Teachers'_Pension_Plan_logo_2021.svg.png"}
                  // sizes = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}        
                  width={"20vw"}
                  // width={["75px", '125px', '175px', '225px', '300px', '300px']}
                  // height={["75px", '125px', '175px', '225px', '300px', '300px']}
                  alt={'Ontario Teachers Pension Plan'}
                  objectFit={"contain"}
                />
              </Link>
              <Link href={"https://search-careers.gm.com/en/"} >
                <Image
                  src={"/homepage/sponsors/gm.svg"}
                  // sizes = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}        
                  width={"10vw"}
                  // width={["75px", '125px', '175px', '225px', '300px', '300px']}
                  // height={["75px", '125px', '175px', '225px', '300px', '300px']}
                  alt={'General Motors'}
                  objectFit={"contain"}
                />
              </Link>
              <Link href={"https://www.accenture.com/ae-en/careers"} >
                <Image
                  src={"/homepage/sponsors/accenture.png"}
                  // sizes = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}        
                  width={"23vw"}
                  // width={["75px", '125px', '175px', '225px', '300px', '300px']}
                  // height={["75px", '125px', '175px', '225px', '300px', '300px']}
                  alt={'Accenture'}
                  objectFit={"contain"}
                />
              </Link>
              <Link href={"https://www.ubisoft.com/en-us/company/careers"} >
                <Image
                  src={"/homepage/sponsors/ubisoft.svg"}
                  // sizes = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}        
                  width={"11vw"}
                  // width={["75px", '125px', '175px', '225px', '300px', '300px']}
                  // height={["75px", '125px', '175px', '225px', '300px', '300px']}
                  alt={'Ubisoft'}
                  objectFit={"contain"}
                />
              </Link>
            </HStack>

            <HStack spacing='4vw'>
              <Link href={"https://www.cppinvestments.com/careers/"} >
                <Image
                  src={"/homepage/sponsors/cpp-investments.png"}
                  sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  width={"37vw"}
                  // width={["75px", '125px', '225px', '275px', '350px', '350px']}
                  // height={["75px", '125px', '225px', '275px', '350px', '350px']}
                  alt={'cpp investments'}
                  objectFit={"contain"}
                />
              </Link>
              <Link href={"https://www.ey.com/en_ca/careers"} >
                <Image
                  src={"/homepage/sponsors/EY.svg.png"}
                  sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  width={"9vw"}
                  pb = {"2vw"}
                  // width={["75px", '125px', '175px', '225px', '300px', '300px']}
                  // height={["75px", '125px', '175px', '200px', '250px', ' 250px']}
                  alt={'EY'}
                  objectFit={"contain"}
                />
              </Link>
              <Link href={"https://www.cibc.com/en/about-cibc/careers.html"} >
                <Image
                  src={"/homepage/sponsors/cibc.svg"}
                  sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  width={"20vw"}
                  // width={["75px", '125px', '175px', '200px', '275px', '275px']}
                  // height={["75px", '125px', '175px', '200px', '275px', ' 275px']}
                  alt={'CIBC'}
                  objectFit={"contain"}
                />
              </Link>
              {/* bronze sponsors */}
            </HStack>

            <HStack>
              <Link href={"https://entrepreneurship.uwo.ca/for-students/internship/"} >
                <Image
                  src={"/homepage/sponsors/morrissette institue for entrepreneurship.webp"}
                  sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  // pb="10px"
                  width={"40vw"}
                  // width={["100px", '150px', '250px', '375px', '400px', '400px']}
                  // height={["75px", '125px', '225px', '275px', '300px', ' 300px']}
                  alt={'morrissette institue for entrepreneurship'}
                  objectFit={"contain"}
                />
              </Link>
            </HStack>
          </VStack>
        </Center>

        {/* Why sponsor */}
        <HStack
          mx={{ "2xl": '150px', xl: '125px', lg: '100px', md: '75px', sm: '55px', base: '30px' }}
          pt={{ "2xl": '600px', xl: '200px', lg: '165px', md: '120px', sm: '100px', base: '65px' }}

        >
          <Box textAlign='left'>
            <Heading
              style={abril.style}
              color="#230E05"
              size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
            >
              Why Sponsor?
            </Heading>
            <Text
              style={workSans.style}
              color="#230E05"
              fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }}
              pt="10px">
              Supporting SheHacks+ means supporting a blend of top Canadian talent to advance
              their tech careers, and increasing diversity and inclusion in tech. The support of
              sponsor partners allows women and non-binary university students to learn skills, gain
              inspiration, and receive mentorship, from industry leaders, peers, and amazing companies
              like you.
            </Text>
            <Link href="mailto:wits.uwo@gmail.com">
              <Button
                size={{ "2xl": 'lg', xl: 'lg', lg: 'lg', md: 'md', sm: 'sm', base: 'xs' }}
                mt="10px"
                colorScheme="blackAlpha"
              >
                LEARN MORE
              </Button>
            </Link>
          </Box>
        </HStack>


        {/* The history of shehacks */}
        <VStack
          pt={{ "2xl": '1550px', xl: '1000px', lg: '925px', md: '650px', sm: '325px', base: "325px" }}

        >
          <Heading
            style={abril.style}
            color="#230E05"
            size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
          >
            The History of SheHacks+
          </Heading>
          <Text
            style={workSans.style}
            color="#230E05"
            mx={{ "2xl": '150px', xl: '125px', lg: '100px', md: '75px', sm: '55px', base: '30px' }}
            fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }}
            pt={{ "2xl": '40px', xl: '40px', lg: '25px', md: '25px', sm: '0px' }}
          >
            SheHacks+ traces its roots back over 7 years ago,
            emerging as a pioneering event aimed at tackling gender
            disparities in the tech industry head-on. Inspired by the
            growing recognition of underrepresentation and gender
            discrimination, the hackathon started as a grassroots
            initiative, driven by individuals deeply passionate about
            fostering diversity and inclusivity in technology.
          </Text>
          {/* <Box
            width= {[ "1250px", '500px', '1000px', '1200px', '1500px',  '2000px']}
            height= {[ "150px", '200px', '400px', '650px', '900px',  ' 900px']}
          >
        <Image
        src= {"/homepage/logos/history.png"}
        sizes = {"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}

        // width={[ 2000,  1500,  1200,  1000,  500, 1250]}
        // height={[ 900,  900,  650,  400,  200,  150]}
        // mt={{ "2xl": '', xl: '200px', lg: '', md: '75px', sm: '55px', base: '0px'}}  
        //sizes = 
        alt={'shehacks history'}
        objectFit={"contain"}
      />
      </Box> */}
        </VStack>

        {/* brought to you by wits */}
        <HStack
          mx={{ "2xl": '150px', xl: '125px', lg: '100px', md: '75px', sm: '55px', base: '30px' }}
          pt={{ "2xl": '250px', xl: '100px', lg: '75px', md: '75px', sm: '55px', base: '30px' }}
        >
          <Box
            // width= {['100px', '125px', '250px', '325px', '400px', '400px']}
            // height={[ '50px','125px','250px','325px','400px','400px']}
            mr={{ "2xl": '50px', xl: '50px', lg: '40px', md: '35px', sm: '10px', base: '0px' }}
          // pt = {{base: '', sm: '', md:'', lg:'', xl:'', '2xl':''}}
          >
            <Image
              src={"/homepage/logos/broughttoyoubywits.png"}
              sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}

              // width= {[ 400, 400,  325,  250,  125,  100]}
              // height={[ 400,  400,  325,  250,  125,  50]}
              alt={'brought to you by wits'}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box textAlign='left'>
            <Text
              style={workSans.style}
              color="#230E05"
              fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }}
            >
              <b>Building a future for women+ in tech</b> <br /> <br />
              WITS+ is a club at Western University that provides
              its community with initiatives and resources to inspire.
              We aim to empower women, women-identifying, and non-binary
              individuals in tech and equip them with the necessary skills
              to succeed in the industry.
            </Text>
            <Link href="https://wits-uwo.ca/">
              <Button
                size={{ "2xl": 'lg', xl: 'lg', lg: 'md', md: 'md', sm: 'sm', base: 'xs' }}
                mt="10px"
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
            pt={{ "2xl": '150px', xl: '100px', lg: '75px', md: '75px', sm: '55px', base: '45px' }}
            size={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: 'xs' }}
            color="#230E05"
          >FAQ</Heading>
        </Center>
        <Center>
          <Box
            color="#230E05"
            pt={{ "2xl": '35px', xl: '20px', lg: '15px', md: '10px', sm: '10px', base: '10px' }}
            px={{ "2xl": '500px', xl: '300px', lg: '150px', md: '80px', sm: '8px', base: '60px' }}>
            <Accordion
              fontFamily='bodyFont'
            >
              <AccordionItem>
                <h2>
                  <AccordionButton h={{ "2xl": '88px', xl: '88px', lg: '50px', md: '40px', sm: '23px', base: '23px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                    <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                      <b>What is a Hackathon?</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pb={4}>
                  A hackathon is a design & coding sprint where “hackers” with both technical and non-technical backgrounds come together to build exciting projects. Throughout the hackathon, you will learn many new skills through workshops, meet like-minded peers, and network with sponsors and mentors. At the end of the weekend, you will get a chance to demo your project and maybe go home with some prizes!
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton style={poppins.style} h={{ "2xl": '88px', xl: '88px', lg: '50px', md: '40px', sm: '23px', base: '23px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                    <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                      <b>Is SheHacks+ 8 in-person?</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pb={4}>
                  Yes! This year, SheHacks+ 8 plans to be fully in-person and will abide by provincial covid policies.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton h={{ "2xl": '88px', xl: '88px', lg: '50px', md: '40px', sm: '23px', base: '23px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                    <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                      <b>I don’t know how to code. Can I still come?</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pb={4}>
                  Of course! The event is designed for first-time hackers to try something new. We actively encourage people from all backgrounds, disciplines, and majors to attend! We have workshops that’ll teach you everything you need to know as well as mentors to guide you along the way. Just bring yourself, a willingness to learn, and a positive attitude!    </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton h={{ "2xl": '88px', xl: '88px', lg: '50px', md: '40px', sm: '23px', base: '23px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                    <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                      <b>Does SheHacks+ cost anything?</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pb={4}>
                  SheHacks+ is absolutely FREE, due to our generous sponsors! You will have access to a plethora of tools and workshops to help you with your project.    </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton h={{ "2xl": '88px', xl: '88px', lg: '50px', md: '40px', sm: '23px', base: '23px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                    <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                      <b>Do I need to come with a team?</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pb={4}>
                  You can come solo or with a team. If you already have a team (3-4 people), you can register with them. If you don&apos;t have a team but would like one, we can match you up with one before the event.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton h={{ "2xl": '88px', xl: '88px', lg: '50px', md: '40px', sm: '23px', base: '23px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                    <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                      <b>Can I still come if I&apos;m not a woman+?</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pb={4}>
                  SheHacks+ is designed to be an inclusive space to support female-identifying and non-binary individuals who are interested in technology. As we&apos;re focused on creating a talent pipeline from minorities in tech, this event is specifically created as a place for women+ to explore the tech industry in a supportive way. Otherwise, we welcome people of all genders to participate as a volunteer or mentor. Keep an eye out on our Facebook and website for more information.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton h={{ "2xl": '88px', xl: '88px', lg: '50px', md: '40px', sm: '23px', base: '23px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                    <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold' >
                      <b>I&apos;m a recently graduated student. Can I still apply?</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pb={4}>
                  Yes! We welcome current students as well as new grads to attend SheHacks+. There will be many networking opportunities with our sponsors as well if you are actively searching for a job!
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton h={{ "2xl": '88px', xl: '88px', lg: '50px', md: '40px', sm: '23px', base: '23px' }} _expanded={{ bg: '#6E6655', color: 'white' }}>
                    <Box style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} as="span" flex='1' textAlign='left' fontWeight='bold'>
                      <b>I don&apos;t attend a Canadian university. Can I still apply?</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel style={poppins.style} fontSize={{ "2xl": '3xl', xl: '3xl', lg: 'xl', md: 'lg', sm: 'sm', base: '8px' }} pb={4}>
                  Yes! SheHacks+ welcomes students from around the world to participate. The only downside is we may not be able to reimburse your travel costs to our venue.
                </AccordionPanel>
              </AccordionItem>

            </Accordion>
          </Box>
        </Center>
        <Box
          h={{ "2xl": '75px', xl: '150px', lg: '150px', md: '150px', sm: '75px', base: '0px' }}
        >
        </Box>
      </Box>
    )
  }
}






