import { Flex, Icon, Box, Link } from "@chakra-ui/react";
import Header from "./Header";
import Router from "next/router";

import { SiPrisma } from "react-icons/si";

const Logo = (props) => {
    return (
        <Link onClick={() => Router.push("/")}>
            <Flex align="center">
                <Icon as={SiPrisma} me={4} h={12} w={12} color="gray.600" />
                <Header>Prisma Test</Header>
            </Flex>
        </Link>
    );
};

export default Logo;
