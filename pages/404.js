import { Icon, Heading, VStack, Center, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { FaQuestion } from "react-icons/fa";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

export default function FourOhFour() {
    return (
        <Center flex="1" my={8} textAlign="center">
            <VStack spacing={8}>
                <Icon as={FaQuestion} w={20} h={20} />
                <Header>404</Header>
                <SubHeader>Page not found</SubHeader>

                <NextLink href="/">
                    <Button colorScheme="blue">Homepage</Button>
                </NextLink>
            </VStack>
        </Center>
    );
}
