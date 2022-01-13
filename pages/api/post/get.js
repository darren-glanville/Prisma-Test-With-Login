import prisma from "../../../lib/prisma";

export default async (req, res) => {
    // posts
    const posts = await prisma.post.findMany({
        take: 6,
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
    return res.status(200).json({ posts: posts });
};
