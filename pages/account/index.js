import { Box, Container, Divider, Heading } from "@chakra-ui/react";

import { getSession } from "next-auth/react";
import prisma from "../../lib/prisma";

import SubHeader from "../../components/SubHeader";
import DeleteAccount from "../../components/account/DeleteAccount";
import UserPosts from "../../components/account/UserPosts";

const Account = (props) => {
    console.log(props.posts);

    return (
        <Box>
            <SubHeader>Account Settings</SubHeader>{" "}
            <Box mt={10}>
                <Container maxW="container.lg">
                    <UserPosts posts={props.posts} />
                    <Divider my={8} />
                    <DeleteAccount />
                </Container>
            </Box>
        </Box>
    );
};

Account.auth = true;
export default Account;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session?.user ?? false) {
        // posts
        const posts = await prisma.post.findMany({
            where: { published: true, author: { email: session.user.email } },
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
}
