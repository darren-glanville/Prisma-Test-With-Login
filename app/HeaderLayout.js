import { Flex, HStack, Icon, Link, Spacer } from "@chakra-ui/react";
import Header from "../components/Header";
import ColorModeSwitcher from "../components/ColorModeSwitcher";
import UserMenu from "../components/UserMenu";

import { SiPrisma } from "react-icons/si";

export default function HeaderLayout(props) {
    // return
    return (
        <Flex mb={10} align="center" direction={{ base: "column", md: "row" }}>
            <Link href="/">
                <Flex align="center">
                    <Icon as={SiPrisma} me={4} h={12} w={12} color="gray.600" />
                    <Header>Prisma Test</Header>
                </Flex>
            </Link>
            <Spacer />

            <HStack gap={4} mt={{ base: "10", md: "0" }}>
                <ColorModeSwitcher />
                <UserMenu />
            </HStack>
        </Flex>
    );
}
