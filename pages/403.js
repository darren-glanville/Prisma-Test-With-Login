import { Icon, VStack, Center, Button } from "@chakra-ui/react";
import NextLink from "next/link";

import { FaLock } from "react-icons/fa";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

export default function AccessDenied() {
    return (
        <Center flex="1" my={8} textAlign="center">
            <VStack spacing={8}>
                <Icon as={FaLock} w={20} h={20} />
                <Header>403</Header>
                <SubHeader>Access Denied</SubHeader>

                <NextLink href="/">
                    <Button colorScheme="blue">Homepage</Button>
                </NextLink>
            </VStack>
        </Center>
    );
}
