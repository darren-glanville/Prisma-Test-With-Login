import { Box, Button, Center, VStack } from "@chakra-ui/react";
import { getProviders, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import ColorModeSwitcher from "../../components/ColorModeSwitcher";
import Logo from "../../components/Logo";

const SignIn = ({ providers }) => {
    const { data: session } = useSession();

    if (session) Router.push("/account"); // redirect to home if already logged in

    return (
        <Center flex="1" my={8} textAlign="center">
            <Box borderWidth="1px" borderRadius="lg" p={12}>
                <VStack gap={8}>
                    <Logo />

                    <ColorModeSwitcher />

                    <VStack gap={4} width="100%">
                        {Object.values(providers).map((provider) => (
                            <Box
                                key={provider.name}
                                onClick={() =>
                                    signIn(provider.id, {
                                        callbackUrl: "/",
                                    })
                                }
                                width="100%"
                            >
                                <Button colorScheme="green" width="100%">
                                    Sign in with {provider.name}
                                </Button>
                            </Box>
                        ))}
                    </VStack>
                </VStack>
            </Box>
        </Center>
    );
};

SignIn.plain = true; // remove header and footer

export default SignIn;

// get login providers
export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
