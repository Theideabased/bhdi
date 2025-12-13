import {
  Box,
  Flex,
  IconButton,
  CloseButton,
  Drawer,
  Portal,
  useDisclosure,
  Button,
  HStack,
} from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
import DesktopLinks from "./DesktopLinks";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Brand from "../../Brand";

export default function NavHeader() {
  return (
    <Box
      bg="#fff"
      pos="sticky"
      px={{ base: 6, md: 16, xl: 20 }}
      py={6}
      top={0}
      left={0}
      zIndex={1000}
    >
      <Flex px={2} align="center" justify="space-between">
        <Brand />
        <NavLinks />
        <HStack
          gap={0}
          color={"primary"}
          id="desktop-header-btns"
          display={"none"}
        >
          <Button size={"sm"} bg="primary">
            Donate
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export function NavLinks() {
  const { isOpen, onClose } = useDisclosure();

  const linkUrls = {
    Home: "/",
    "About Us": "/#about-us",
    "What We Do": "/#what-we-do",
    "Our Mission": "/#our-mission",
    Contact: "/#contact",
  };
  const Links = ["Home", "About Us", "What We Do", "Our Mission", "Contact"];

  return (
    <Box>
      <DesktopLinks Links={Links} linkUrls={linkUrls} />
      <Drawer.Root isOpen={isOpen} onClose={onClose}>
        <Drawer.Trigger id="menu-trigger" asChild display={"flex"}>
          <IconButton
            size="sm"
            bg="primary"
            h="8"
            color="#fff"
            variant="surface"
            aria-label="Open Menu"
          >
            <FaBars />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header bg="baseLight" py={7}>
                <Brand />
              </Drawer.Header>
              <Drawer.Body bg="#fff">
                <MobileMenu Links={Links} linkUrls={linkUrls} />
              </Drawer.Body>
              <Drawer.CloseTrigger asChild right={5}>
                <CloseButton
                  size="sm"
                  bg="primary"
                  color="#fff"
                  mt={2.5}
                  variant="surface"
                  aria-label="Close Menu"
                >
                  <FaX size={40} />
                </CloseButton>
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
