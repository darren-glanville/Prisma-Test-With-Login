import { Box, Flex } from "@chakra-ui/react";
import HeaderLayout from "./HeaderLayout";

export default function Layout({ children }) {
    return (
        <Box height="100vh" textAlign="center">
            <Flex minH="100%" p={12} flexDirection="column">
                <HeaderLayout />
                {children}
            </Flex>
        </Box>
    );
}
