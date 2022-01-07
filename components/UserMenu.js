import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Stack,
} from "@chakra-ui/react";

import Router from "next/router";
import { useSession, getSession, signOut } from "next-auth/react";

import MainMenu from "./MainMenu";

const UserMenu = (props) => {
    const { data: session, loading } = useSession();

    if (!session) {
        return (
            <Link
                onClick={() => Router.push(`/auth/signin`)}
                style={{ textDecoration: "none" }}
            >
                <Button colorScheme="blue" variant="outline">
                    Sign in
                </Button>
            </Link>
        );
    } else {
        return (
            <Stack
                direction={{ base: "column", md: "row" }}
                align={"center"}
                gap={4}
            >
                <MainMenu />
                <Menu autoSelect={false} width={{ base: "100%" }}>
                    <MenuButton
                        as={Button}
                        colorScheme="blue"
                        variant="outline"
                        rightIcon={<ChevronDownIcon />}
                    >
                        <Flex align="center">
                            <Avatar src={session.user.image} size="xs" mr="2" />

                            {session.user.name}
                        </Flex>
                    </MenuButton>
                    <MenuList>
                        <br />
                        <Center>
                            <Avatar size={"2xl"} src={session.user.image} />
                        </Center>
                        <br />
                        <Center>
                            <p>
                                <strong>{session.user.name}</strong>
                            </p>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem onClick={() => Router.push("/account")}>
                            Account Settings
                        </MenuItem>
                        <MenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                            Logout
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Stack>
        );
    }
};

export default UserMenu;

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context),
            hello: "World",
        },
    };
}
