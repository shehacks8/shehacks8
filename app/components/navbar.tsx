// source = https://chakra-templates.dev/navigation/navbar

'use client'
import ChakraNextImage from "./Image";
import { Image } from '@chakra-ui/react'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Link,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { Inter, Abril_Fatface, Work_Sans, Poppins } from 'next/font/google'
const abril = Abril_Fatface({ subsets: ['latin'], weight: ['400'] })
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={"#10572A"}
        color={"#10572A"}
        minH={'60px'}
        py={{ base: 1 }}
        px={{ base: 4 }}
        borderBottom={2}
        borderStyle={'solid'}
        borderColor={""}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href = "/">
          
          <Image
            src = {"/homepage/logos/nav-logo.png"}
            height = {"35"}
            width = "39"
            alt = {"shehacks+ logo"}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            />
            </Link>
            <Link href = "https://techtogether.io/">
            <Image
              src = {"/homepage/logos/togetherlogo.png"}
              height = {"35"}
              width = "35"
              alt = {"techtogether logo"}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              />
            </Link>
          <Flex display={{ base: 'none', md: 'flex' }} mt = {2} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Link href = "https://witsuwo.typeform.com/to/EI2tyyPo">
            <Button
              style={workSans.style}
              colorScheme="blackAlpha"
              >
              Apply
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = "#ffffff"
  const linkHoverColor = "#09170E"
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                px={5}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={"#10572A"} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color= "#FFFFFF">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor= "#10572A"
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About',
    href: '/',
  },
  {
    label: 'Hacker Olympics',
    href: '/hacker-olympics',
  },
  {
    label: 'Sponsor',
    href: '/#sponsors',
  },
  {
    label: 'FAQ',
    href: '/#faq',
  },
]