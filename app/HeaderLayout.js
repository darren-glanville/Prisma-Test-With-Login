import { Flex, HStack, Spacer, Stack } from "@chakra-ui/react";

import ColorModeSwitcher from "../components/ColorModeSwitcher";
import UserMenu from "../components/UserMenu";

import Logo from "../components/Logo";

export default function HeaderLayout(props) {
    // return
    return (
        <Flex mb={10} align="center" direction={{ base: "column", md: "row" }}>
            <Logo />
            <Spacer />

            <Stack
                direction={{ base: "column", md: "row" }}
                align={"center"}
                gap={4}
                mt={{ base: "4", md: "0" }}
            >
                <ColorModeSwitcher />
                <UserMenu />
            </Stack>
        </Flex>
    );
}
