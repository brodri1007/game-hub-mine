import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image boxSize="39" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
