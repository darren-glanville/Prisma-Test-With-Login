import { Box, Center } from "@chakra-ui/react";
import Header from "./Header";

const PageTitle = ({ props, children }) => {
    return (
        <Box p={12} mb={12}>
            <Center>
                <Header>{children}</Header>
            </Center>
        </Box>
    );
};

export default PageTitle;
