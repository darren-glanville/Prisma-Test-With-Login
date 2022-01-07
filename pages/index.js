import {
    Box,
    Button,
    Center,
    Link,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    VStack,
} from "@chakra-ui/react";
import SubHeader from "../components/SubHeader";

import Router from "next/router";
import prisma from "../lib/prisma";

export default function Index(props) {
    return (
        <>
            <Box mt={10}>
                <SimpleGrid spacing={8} columns={{ base: 1, sm: 2, md: 3 }}>
                    {props.posts.map((post, index) => {
                        const authorName = post.author
                            ? post.author.name
                            : "Unknown author";

                        return (
                            <LinkBox key={index}>
                                <Link
                                    onClick={() =>
                                        Router.push(`/post/${post.id}`)
                                    }
                                    style={{ textDecoration: "none" }}
                                >
                                    <Box
                                        borderWidth="1px"
                                        borderRadius="lg"
                                        p={8}
                                        h="100%"
                                    >
                                        <Center h="100%">
                                            <VStack spacing={4}>
                                                <SubHeader>
                                                    {post.title}
                                                </SubHeader>

                                                <small>By {authorName}</small>

                                                <Button colorScheme="green">
                                                    Open
                                                </Button>
                                            </VStack>
                                        </Center>
                                    </Box>
                                </Link>
                            </LinkBox>
                        );
                    })}
                </SimpleGrid>
            </Box>
        </>
    );
}

export async function getServerSideProps() {
    // posts
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
        orderBy: {
            id: "desc",
        },
    });

    // return
    return { props: { posts } };
}
