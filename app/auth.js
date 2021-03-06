import { Center } from "@chakra-ui/react";
import Loading from "../components/Loading";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import LoadingFullPage from "../components/LoadingFullPage";

const Auth = ({ children, role }) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const loading = status === "loading" ? true : false;

    const hasUser = !!session?.user;

    const hasAccess = () => {
        if (hasUser) {
            if (!role) {
                return true; // no role to general has access
            } else {
                return session.user.role === role.toUpperCase() ? true : false;
            }
        } else {
            return false; // not ligged in
        }
    };

    // redirect to login page if not logged in
    useEffect(() => {
        if (!loading) {
            if (!hasUser) {
                router.push("/auth/signin"); // redirect to login page
            } else if (!hasAccess()) {
                //router.push("/403");
            }
        }
    }, [loading, hasUser]);

    if (loading || !hasAccess()) {
        return <LoadingFullPage />;
    }

    // return
    if (hasAccess()) return children;
};

export default Auth;
