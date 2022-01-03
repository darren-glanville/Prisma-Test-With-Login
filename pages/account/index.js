import { Box, Container, Divider } from "@chakra-ui/react";

import SubHeader from "../../components/SubHeader";
import DeleteAccount from "../../components/account/DeleteAccount";

const Account = (props) => {
    return (
        <Box>
            <SubHeader>Account Settings</SubHeader>{" "}
            <Box mt={10}>
                <Container maxW="container.lg">
                    <Divider />
                    <DeleteAccount mt={4} />
                </Container>
            </Box>
        </Box>
    );
};

Account.auth = true;
export default Account;
