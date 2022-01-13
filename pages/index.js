import {
    Box,
    Button,
    Center,
    Link,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    Stack,
    VStack,
} from "@chakra-ui/react";
import SubHeader from "../components/SubHeader";
import Pagination from "../components/Pagination";

import Router from "next/router";
import prisma from "../lib/prisma";

export default function Index(props) {
    return (
        <>
            <Stack direction={"column"} mt={10} gap={10}>
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

                <Pagination
                    page={props.selectedPage}
                    total={props.postsPages}
                />
            </Stack>
        </>
    );
}

export async function getServerSideProps(context) {
    const selectedPage = parseInt(context?.query?.page ?? 1);

    const whereSearch = { published: true };
    const perPage = 6;

    // posts
    const posts = await prisma.post.findMany({
        take: perPage,
        skip: perPage * (selectedPage - 1),
        where: whereSearch,
        include: {
            author: {
                select: { name: true },
            },
        },
        orderBy: {
            id: "desc",
        },
    });

    // total
    const postsCount = await prisma.post.count({
        where: whereSearch,
    });

    const postsPages = Math.ceil(postsCount / perPage);

    // return
    return { props: { posts, selectedPage, postsCount, postsPages } };
}
