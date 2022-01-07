import { Heading } from "@chakra-ui/react";

const SubHeader = ({ props, children }) => {
    return (
        <Heading
            fontSize={{
                base: "2xl",
                sm: "2xl",
                md: "3xl",
            }}
            lineHeight={"110%"}
            fontWeight={920}
            color="gray.600"
            textAlign="center"
        >
            {children}
        </Heading>
    );
};

export default SubHeader;
