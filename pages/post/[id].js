import { Box, Button, Link, Text, VStack } from "@chakra-ui/react";
import Header from "../../components/Header";

import prisma from "../../lib/prisma";

export default function Post(props) {
    const authorName = props.author ? props.author.name : "Unknown author";

    return (
        <VStack spacing={8}>
            <Header>{props.title}</Header>

            <Link href="/" style={{ textDecoration: "none" }}>
                <Button colorScheme="blue">Back</Button>
            </Link>

            <small>By {authorName}</small>
            <Box background="gray.100" borderRadius="lg" p={4} w="100%">
                <Text>{props.content}</Text>
            </Box>
        </VStack>
    );
}

export async function getServerSideProps({ params }) {
    const post = await prisma.post.findUnique({
        where: {
            id: Number(params?.id) || -1,
        },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    return {
        props: post,
    };
}
