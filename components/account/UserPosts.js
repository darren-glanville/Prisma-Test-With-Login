import { Table, Thead, Tbody, Tr, Th, Td, Icon } from "@chakra-ui/react";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const UserPosts = (props) => {
    return (
        <Table variant="striped">
            <Thead>
                <Tr>
                    <Th>Post Title</Th>
                    <Th>Published</Th>
                </Tr>
            </Thead>
            <Tbody>
                {props.posts.map((post, index) => {
                    const published = post.published ? (
                        <Icon as={FaCheckCircle} color={"green"} />
                    ) : (
                        <Icon as={FaTimesCircle} color={"red"} />
                    );

                    return (
                        <Tr>
                            <Td>{post.title}</Td>
                            <Td>{published}</Td>
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default UserPosts;
