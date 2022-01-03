import { Flex, Box, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { lightGreyTextColor } from "../variables";

const FooterLayout = (props) => {
    return (
        <Flex justify="center" pt="24" mt="auto">
            <Box fontSize="sm" color={lightGreyTextColor}>
                <VStack gap={4}>
                    <Link
                        rel="repo"
                        href="https://github.com/darren-glanville/Prisma-Test-With-Login"
                    >
                        <Flex align="center">
                            <Icon as={FaGithub} me={2} />
                            <Text>Repository hosted on GitHub</Text>
                        </Flex>
                    </Link>

                    <Link
                        rel="license"
                        href="http://creativecommons.org/licenses/by/4.0/"
                    >
                        <Flex align="center">
                            <Image
                                src="https://i.creativecommons.org/l/by/4.0/80x15.png"
                                me={2}
                                opacity={0.3}
                            />
                            <Text>Licenced by Creative Commons</Text>
                        </Flex>
                    </Link>
                </VStack>
            </Box>
        </Flex>
    );
};

export default FooterLayout;
