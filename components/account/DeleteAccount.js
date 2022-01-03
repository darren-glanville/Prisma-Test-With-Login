import {
    Alert,
    AlertDescription,
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    AlertIcon,
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const DeleteAccount = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => {
        setIsOpen(false);
        setFormLocked(false);
    };
    const cancelRef = useRef();

    const [formLocked, setFormLocked] = useState(false);
    const { data: session } = useSession();

    // Form Validation
    const ValidateForm = Yup.object().shape({
        confirm: Yup.string()
            .required("Required")
            .matches("Delete My Account", "Text is not correct"),
    });

    // Form
    const formik = useFormik({
        initialValues: {
            confirm: "",
        },
        validationSchema: ValidateForm,
        onSubmit: (values) => {
            if (formLocked === false) {
                setFormLocked(true);

                fetch("/api/account/delete", {
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
                    });
            }
        },
    });

    // Component
    return (
        <Box {...props}>
            <Button colorScheme="red" onClick={() => setIsOpen(true)}>
                Delete Account
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay>
                    <form onSubmit={formik.handleSubmit}>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                Delete Account
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                <Alert status="error" mb={4}>
                                    <AlertIcon />
                                    <AlertDescription>
                                        This action cannot be undone.
                                    </AlertDescription>
                                </Alert>

                                <Text mb={4}>
                                    Enter <strong>Delete My Account</strong>{" "}
                                    below to confirm you want to delete your
                                    account.
                                </Text>

                                <FormControl isInvalid={formik.errors.confirm}>
                                    <Input
                                        id="confirm"
                                        name="confirm"
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.confirm ? (
                                        <FormErrorMessage>
                                            {formik.errors.confirm}
                                        </FormErrorMessage>
                                    ) : null}
                                </FormControl>
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    colorScheme="red"
                                    type="submit"
                                    ml={3}
                                    isDisabled={formLocked}
                                >
                                    Delete Account
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </form>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    );
};

export default DeleteAccount;
