import { Box, Button, Link, Text, VStack } from "@chakra-ui/react";
import Router from "next/router";
import SubHeader from "../../components/SubHeader";

import prisma from "../../lib/prisma";

export default function Post(props) {
    const authorName = props.author ? props.author.name : "Unknown author";

    return (
        <VStack spacing={8}>
            <SubHeader>{props.title}</SubHeader>

            <Link
                onClick={() => Router.push("/")}
                style={{ textDecoration: "none" }}
            >
                <Button colorScheme="green">Back</Button>
            </Link>

            <small>By {authorName}</small>
            <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
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
