import { Dialog, Button, Flex, Text, TextField, TextArea } from "@radix-ui/themes"
import { useState } from "react"
import useCreateTodo from "../hooks/useCreateTodo";


const CreateTodoModal = () => {
    const handleCreateNewTodo = useCreateTodo();

    const [fields, setFields] = useState({
        title: "",
        description: "",
    });

    const handleChange = (name, e) => {
        setFields((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const { title, description } = fields;

    const handleSubmit = async () => {
        await handleCreateNewTodo(title, description);
        setFields({ title: "", description: "" });
    }

    return (
        <div className="w-full flex justify-end">
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button color="orange">Create Todo</Button>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="450px">
                    <Dialog.Title>New Todo</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Create A New Todo Here.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Todo Title
                            </Text>
                            <TextField.Root
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => handleChange("title", e)}
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Todo Description
                            </Text>
                            <TextArea placeholder="Enter description"
                                value={description}
                                onChange={(e) => handleChange("description", e)} />
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>

                        <Button onClick={handleSubmit}>Submit</Button>

                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    )
}

export default CreateTodoModal