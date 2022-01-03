import { extendTheme } from "@chakra-ui/react";

const Button = {
    variants: {
        delete: {
            bg: "red.500",
            color: "white",
            _hover: {
                bg: "red.700",
            },
            _focus: {
                borderColor: "red.900",
            },
        },
    },
};

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },

    shadows: {
        outline: "0 0 0 3px var(--chakra-colors-gray-900)",
    },

    components: {
        Button,
    },
});

export default theme;
