import React from "react";
import {
    useColorMode,
    Flex,
    FormLabel,
    Switch,
    Tooltip,
    Box,
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
        <Box ref={ref} {...rest}>
            {children}
        </Box>
    ));

    const CustomToolTip = () => (
        <Tooltip hasArrow label="Dark mode?" closeDelay={500}>
            <CustomCard>
                <FaMoon />
            </CustomCard>
        </Tooltip>
    );

    return (
        <Flex align="center">
            <FormLabel htmlFor="change-theme" mb="0">
                <CustomToolTip />
            </FormLabel>
            <Box>
                <Switch
                    id="change-theme"
                    colorScheme="blue"
                    onChange={toggleColorMode}
                    isChecked={colorMode === "dark" ? true : false}
                />
            </Box>
        </Flex>
    );
};

export default ColorModeSwitcher;
