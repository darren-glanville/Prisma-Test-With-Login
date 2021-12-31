import { Heading, Text } from "@chakra-ui/react";

const Header = ({ props, children }) => {
    return (
        <Heading
            fontSize={{
                base: "3xl",
                sm: "4xl",
                md: "5xl",
            }}
            lineHeight={"110%"}
            fontWeight={920}
            color="blue.600"
        >
            {children}
        </Heading>
    );
};

export default Header;
