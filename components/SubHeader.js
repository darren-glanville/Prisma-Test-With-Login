import { Heading } from "@chakra-ui/react";

const SubHeader = ({ props, children }) => {
    return (
        <Heading
            fontSize={{
                base: "1xl",
                sm: "2xl",
                md: "3xl",
            }}
            lineHeight={"110%"}
            fontWeight={920}
            color="gray.600"
        >
            {children}
        </Heading>
    );
};

export default SubHeader;
