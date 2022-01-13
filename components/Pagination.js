import {
    Button,
    Flex,
    Link,
    LinkBox,
    useColorModeValue,
} from "@chakra-ui/react";

import Router, { useRouter } from "next/router";

const Pagination = (props) => {
    const router = useRouter();

    if (props?.total == false) return null;

    // Pages
    const startPage = 1;
    const endPage = props.total > 10 ? 10 : props.total;
    const backPage = props.page - 1;
    const nextPage = props.page + 1;

    const pages = [];
    for (var i = startPage; i <= endPage; i++) {
        pages.push({
            number: i,
        });
    }

    // Buttons
    const PageButton = (props) => {
        const activeStyle = {
            bg: useColorModeValue("blue.600", "blue.700"),
            color: useColorModeValue("white", "gray.200"),
        };
        return (
            <Button
                mx={1}
                px={4}
                py={2}
                rounded="md"
                bg={useColorModeValue("gray.300", "gray.600")}
                color={useColorModeValue("gray.700", "gray.200")}
                opacity={props.disabled && 0.4}
                _hover={!props.disabled && activeStyle}
                cursor={props.disabled && "not-allowed"}
                {...(props.active && activeStyle)}
            >
                {!props.disabled ? (
                    <Link
                        onClick={() =>
                            Router.push(`${router.basePath}?page=${props.page}`)
                        }
                        style={{ textDecoration: "none" }}
                    >
                        {props.children}
                    </Link>
                ) : (
                    props.children
                )}
            </Button>
        );
    };

    // Render

    return (
        <Flex w="full" alignItems="center" justifyContent="center">
            <Flex>
                <PageButton disabled={props.page === 1} page={backPage}>
                    Back
                </PageButton>
                {pages.map((page) => {
                    return (
                        <PageButton
                            key={page.number}
                            active={props.page === page.number}
                            page={page.number}
                        >
                            {page.number}
                        </PageButton>
                    );
                })}
                <PageButton
                    disabled={props.page === props.total}
                    page={nextPage}
                >
                    Next
                </PageButton>
            </Flex>
        </Flex>
    );
};
export default Pagination;
