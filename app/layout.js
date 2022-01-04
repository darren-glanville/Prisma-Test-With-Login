import { Box, Flex } from "@chakra-ui/react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

export default function Layout({ children, ...props }) {
    return (
        <Box height="100vh">
            <Flex minH="100%" p={12} flexDirection="column">
                {props?.plain === false ? <HeaderLayout /> : null}
                {children}
                <FooterLayout />
            </Flex>
        </Box>
    );
}
