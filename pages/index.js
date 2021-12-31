import {
    Box,
    Button,
    Heading,
    LinkBox,
    LinkOverlay,
    VStack,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

import prisma from "../lib/prisma";

export default function Index(props) {
    return (
        <Box>
            <Header>{props.env.name}</Header>
            <Box mt={10}>
                <Wrap spacing={8} justify="center">
                    {props.posts.map((post, index) => {
                        const authorName = post.author
                            ? post.author.name
                            : "Unknown author";

                        return (
                            <LinkBox key={index}>
                                <Box
                                    w="md"
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    p={8}
                                >
                                    <VStack spacing={4}>
                                        <LinkOverlay href={`/post/${post.id}`}>
                                            <SubHeader>{post.title}</SubHeader>
                                        </LinkOverlay>
                                        <small>By {authorName}</small>
                                        <LinkOverlay href={`/post/${post.id}`}>
                                            <Button colorScheme="blue">
                                                Open
                                            </Button>
                                        </LinkOverlay>
                                    </VStack>
                                </Box>
                            </LinkBox>
                        );
                    })}
                </Wrap>
            </Box>
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

    // env
    const env = {
        name: process.env.APP_NAME ?? "App",
    };

    // return
    return { props: { posts, env } };
}
