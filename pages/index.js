import {
    Box,
    Button,
    Center,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    VStack,
} from "@chakra-ui/react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

import prisma from "../lib/prisma";

export default function Index(props) {
    return (
        <Box mt={10}>
            <SimpleGrid spacing={8} columns={{ base: 1, sm: 2, md: 3 }}>
                {props.posts.map((post, index) => {
                    const authorName = post.author
                        ? post.author.name
                        : "Unknown author";

                    return (
                        <LinkBox key={index}>
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                p={8}
                                h="100%"
                            >
                                <Center h="100%">
                                    <VStack spacing={4}>
                                        <LinkOverlay href={`/post/${post.id}`}>
                                            <SubHeader>{post.title}</SubHeader>
                                        </LinkOverlay>
                                        <small>By {authorName}</small>
                                        <LinkOverlay href={`/post/${post.id}`}>
                                            <Button colorScheme="green">
                                                Open
                                            </Button>
                                        </LinkOverlay>
                                    </VStack>
                                </Center>
                            </Box>
                        </LinkBox>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
}

export async function getStaticProps() {
    // posts
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });

    // return
    return { props: { posts } };
}
