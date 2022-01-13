import { Center, Skeleton, Stack } from "@chakra-ui/react";
import Loading from "./Loading";

const LoadingFullPage = (props) => {
    return (
        <Center flex="1" my={8} textAlign="center">
            <Loading />
        </Center>
    );
};

export default LoadingFullPage;
