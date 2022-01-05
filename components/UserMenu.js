import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Avatar,
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
} from "@chakra-ui/react";

import Router from "next/router";
import { useSession, getSession, signOut } from "next-auth/react";

const UserMenu = (props) => {
    const { data: session, loading } = useSession();

    if (!session) {
        return (
            <Link
                onClick={() => Router.push(`/auth/signin`)}
                style={{ textDecoration: "none" }}
            >
                <Button colorScheme="blue" variant="outline">
                    Login
                </Button>
            </Link>
        );
    } else {
        return (
            <Menu autoSelect={false}>
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
