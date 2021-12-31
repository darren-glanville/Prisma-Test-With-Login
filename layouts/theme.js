import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },

    shadows: {
        outline: "0 0 0 3px var(--chakra-colors-green-700)",
    },
});

export default theme;
