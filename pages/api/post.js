import prisma from "../../lib/prisma";
import { getSession } from "next-auth/react";

export default async (req, res) => {
    const session = await getSession({ req });
    const data = req.body;

    // create new post
    if (req.method === "POST") {
        const post = await prisma.post.create({
            data: {
                title: data.values.title,
                content: data.values.content,
                published: true,
                author: { connect: { email: session.user.email } },
            },
        });

        return res.status(200).json({ message: post });
    }

    // no valid method
    return res.status(400).json({ message: "No valid method" });
};
