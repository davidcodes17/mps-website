import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import Logo from "../../components/logo";
import NavLink from "../../components/navLink";
import { HambergerMenu } from "iconsax-react";
import React from "react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();
  return (
    <Box px={10} pos={"fixed"} width={"100%"} zIndex={99} py={5} bg={"#fff"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Logo />

        <Flex
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          gap={10}
        >
          <NavLink link="/" text="Home" />
          <NavLink link="/" text="About Us" />
          <NavLink link="/" text="Partenership" />
          <NavLink link="/" text="Giving" />
          <NavLink link="/" text="Media Archive" />
          <NavLink link="/" text="Testimony" />
        </Flex>
        <Box
          display={{ lg: "none", md: "none", sm: "block", base: "block" }}
          cursor={"pointer"}
          ref={btnRef}
          width={"fit-content"}
          onClick={onOpen}
        >
          <HambergerMenu size={40} />
        </Box>
        <>
          {/* <Box display={{ lg: "none", md: "none", sm: "block", base: "block" }}> */}
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Logo />
                  <CloseButton size={"lg"} onClick={onClose} />
                </Flex>
              </DrawerHeader>

              <DrawerBody lineHeight={"40px"}>
                <NavLink link="/" text="Home" />
                <NavLink link="/" text="About Us" />
                <NavLink link="/" text="Partenership" />
                <NavLink link="/" text="Giving" />
                <NavLink link="/" text="Media Archive" />
                <NavLink link="/" text="Testimony" />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          {/* </Box> */}
        </>
      </Flex>
    </Box>
  );
};

export default Header;
