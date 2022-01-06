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
    useToast,
} from "@chakra-ui/react";
import SubHeader from "../../components/SubHeader";

import { useState } from "react";
import Router from "next/router";

import { useFormik } from "formik";
import * as Yup from "yup";

const NewPage = (props) => {
    const [formLocked, setFormLocked] = useState(false);
    const toast = useToast();

    // Form
    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(15, "Must be at least 15 characters.")
                .required("Required"),
            content: Yup.string().required("Required"),
        }),
        onSubmit: (values) => {
            if (formLocked === false) {
                setFormLocked(true);

                fetch("/api/post", {
                    body: JSON.stringify({
                        values,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);

                        toast({
                            title: "Post created.",
                            description: "We've created your new post for you.",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                        });

                        Router.push({
                            pathname: "/",
                        });
                    });
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
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.errors.title}>
                        <FormLabel htmlFor="title">Post Title</FormLabel>
                        <Input
                            id="title"
                            name="title"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter post title"
                            value={formik.values.title}
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
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter post content"
                            value={formik.values.content}
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
                            isLoading={formLocked}
                            loadingText="Submitting"
                        >
                            Create Post
                        </Button>
                    </ButtonGroup>
                </form>
            </Box>
        </VStack>
    );
};

NewPage.auth = true;
export default NewPage;
