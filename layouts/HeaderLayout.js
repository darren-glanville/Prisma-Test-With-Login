import { Flex, Link } from "@chakra-ui/react";
import Header from "../components/Header";

export default function HeaderLayout(props) {
    return (
        <Flex mb={10} align="center">
            <Link href="/">
                <Header>Prisma Test</Header>
            </Link>
        </Flex>
    );
}
