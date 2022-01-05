import { Button, ButtonGroup } from "@chakra-ui/react";
import Router from "next/router";

const MainMenu = (props) => {
    return (
        <ButtonGroup variant="outline" spacing="4">
            <Button colorScheme="blue" onClick={() => Router.push("/post/new")}>
                Add Post
            </Button>
        </ButtonGroup>
    );
};

export default MainMenu;
