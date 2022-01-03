import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export default async (req, res) => {
    const session = await getSession({ req });

    // Check method
    if (req.method !== "POST")
        return res.status(400).json({
            message: "Method not supported",
        });

    // Check logged in
    console.log(session);
    if (!!session?.user === false)
        return res.status(401).json({
            message: "Only supported if logged in",
        });

    // Check email
    if (req.body?.email === session.user.email) {
        const deleteUser = await prisma.user.delete({
            where: {
                email: req.body?.email,
            },
        });

        return res.status(200).json({ message: "Account deleted" });
    }
};
