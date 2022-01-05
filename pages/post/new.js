import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import SubHeader from "../../components/SubHeader";

import { useState } from "react";
import Router from "next/router";

import { useFormik } from "formik";
import * as Yup from "yup";

const NewPage = (props) => {
    const [formLocked, setFormLocked] = useState(false);

    // Form Validation
    const ValidateForm = Yup.object().shape({
        title: Yup.string()
            .min(15, "Must be at least 15 characters.")
            .required("Required"),
        content: Yup.string().required("Required"),
    });

    // Form
    const formik = useFormik({
        initialValues: {
            title: "Hello",
        },
        validationSchema: ValidateForm,
        onSubmit: (values) => {
            if (formLocked === false) {
                setFormLocked(true);

                console.log(values);

                /*fetch("/api/account/delete", {
                    body: JSON.stringify({
                        email: session.user.email,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        signOut({ callbackUrl: "/" });
                    });*/
            }
        },
    });

    // Output
    return (
        <VStack spacing={8}>
            <SubHeader>New Post</SubHeader>

            <Box
                borderWidth="1px"
                borderRadius="lg"
                p={8}
                w={{ base: "100%", md: "50%" }}
                textAlign={"center"}
            >
                <form method="POST" onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.errors.title}>
                        <FormLabel htmlFor="title">Post Title</FormLabel>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Post Title"
                        />
                        {formik.errors.title ? (
                            <FormErrorMessage>
                                {formik.errors.title}
                            </FormErrorMessage>
                        ) : null}
                    </FormControl>

                    <FormControl isInvalid={formik.errors.content} mt={4}>
                        <FormLabel htmlFor="content">Post Content</FormLabel>
                        <Textarea
                            id="content"
                            name="content"
                            placeholder="Enter post content"
                            h={"300px"}
                        />
                        {formik.errors.content ? (
                            <FormErrorMessage>
                                {formik.errors.content}
                            </FormErrorMessage>
                        ) : null}
                    </FormControl>

                    <ButtonGroup gap={4} mt={8}>
                        <Button onClick={() => Router.push("/")}>Cancel</Button>
                        <Button
                            colorScheme="green"
                            type="submit"
                            isDisabled={formLocked}
                        >
                            Create Post
                        </Button>
                    </ButtonGroup>
                </form>
            </Box>
        </VStack>
    );
};

export default NewPage;
