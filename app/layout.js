import { Box, Center, Flex } from "@chakra-ui/react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

import { useSession } from "next-auth/react";
import Loading from "../components/Loading";
import LoadingFullPage from "../components/LoadingFullPage";

export default function Layout({ children, ...props }) {
    const { data: session, status } = useSession();
    const loading = status === "loading" ? true : false;

    // render
    return (
        <Box height="100vh">
            <Flex minH="100%" p={12} flexDirection="column">
                {loading ? (
                    <LoadingFullPage />
                ) : (
                    <>
                        {props?.plain === false ? <HeaderLayout /> : null}
                        {children}
                        <FooterLayout />
                    </>
                )}
            </Flex>
        </Box>
    );
}
