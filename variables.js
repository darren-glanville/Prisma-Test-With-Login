import { useColorModeValue } from "@chakra-ui/react";

export const greyTextColor = () => {
    return useColorModeValue("gray.500", "gray.600");
};

export const lightGreyTextColor = () => {
    return useColorModeValue("gray.300", "gray.700");
};
