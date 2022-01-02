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
import { useSession, signIn, signOut } from "next-auth/react";

const UserMenu = (props) => {
    const { data: session, status } = useSession();

    if (!session) {
        return (
            <Link href="/api/auth/signin" style={{ textDecoration: "none" }}>
                <Button colorScheme="green" variant="outline">
                    Login
                </Button>
            </Link>
        );
    } else {
        return (
            <Menu autoSelect={false}>
                <MenuButton
                    as={Button}
                    colorScheme="green"
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
                    <MenuItem onClick={signOut}>Logout</MenuItem>
                </MenuList>
            </Menu>
        );
    }
};

export default UserMenu;
