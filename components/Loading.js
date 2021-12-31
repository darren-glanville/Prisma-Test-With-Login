import React from "react";
import { Spinner } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.400"
            color="purple.700"
            size="sm"
        />
    );
}
