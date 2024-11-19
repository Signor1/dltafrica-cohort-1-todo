import { AlertDialog, Box, Button, Card, Dialog, Flex, Text, TextArea, TextField } from "@radix-ui/themes"


const Todo = () => {
    return (
        <Box className="w-full">
            <Card variant="surface" >
                <Flex direction={"column"} gap={6}>
                    <Text as="div" size="2" weight="bold">
                        Title
                    </Text>
                    <Text as="div" color="gray" size="2">
                        Reading
                    </Text>
                    <Text as="div" size="2" weight="bold">
                        Description
                    </Text>
                    <Text as="div" color="gray" size="2">
                        I need to read by 7pm ahead of Nethermind interview.
                    </Text>
                    <Text as="div" size="2" weight="bold">
                        Status
                    </Text>
                    <Text as="div" color="gray" size="2">
                        Created
                    </Text>
                </Flex>

                <div className="w-full flex justify-start mt-4 items-center gap-4">
                    {/* Delete Alert */}
                    <AlertDialog.Root>
                        <AlertDialog.Trigger>
                            <Button color="red">Delete</Button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content maxWidth="450px">
                            <AlertDialog.Title>Delete Todo</AlertDialog.Title>
                            <AlertDialog.Description size="2">
                                Are you sure? If you delete this todo, you will not be able to recover it.
                            </AlertDialog.Description>

                            <Flex gap="3" mt="4" justify="end">
                                <AlertDialog.Cancel>
                                    <Button variant="soft" color="gray">
                                        Cancel
                                    </Button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action>
                                    <Button variant="solid" color="red">
                                        Delete
                                    </Button>
                                </AlertDialog.Action>
                            </Flex>
                        </AlertDialog.Content>
                    </AlertDialog.Root>

                    {/* Update todo inputs */}
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button color="orange">Edit</Button>
                        </Dialog.Trigger>

                        <Dialog.Content maxWidth="450px">
                            <Dialog.Title>Edit Todo</Dialog.Title>
                            <Dialog.Description size="2" mb="4">
                                Edit Your Todo Here.
                            </Dialog.Description>

                            <Flex direction="column" gap="3">
                                <label>
                                    <Text as="div" size="2" mb="1" weight="bold">
                                        Todo Title
                                    </Text>
                                    <TextField.Root
                                        placeholder="Enter title"
                                    />
                                </label>
                                <label>
                                    <Text as="div" size="2" mb="1" weight="bold">
                                        Todo Description
                                    </Text>
                                    <TextArea placeholder="Enter description" />
                                </label>
                            </Flex>

                            <Flex gap="3" mt="4" justify="end">
                                <Dialog.Close>
                                    <Button variant="soft" color="gray">
                                        Cancel
                                    </Button>
                                </Dialog.Close>

                                <Button >Update</Button>

                            </Flex>
                        </Dialog.Content>
                    </Dialog.Root>

                    {/* Complete Alert */}
                    <AlertDialog.Root>
                        <AlertDialog.Trigger>
                            <Button color="green">Done</Button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content maxWidth="450px">
                            <AlertDialog.Title>Completed Todo</AlertDialog.Title>
                            <AlertDialog.Description size="2">
                                Are you sure you&apos;ve completed this task ?
                            </AlertDialog.Description>

                            <Flex gap="3" mt="4" justify="end">
                                <AlertDialog.Cancel>
                                    <Button variant="soft" color="gray">
                                        Cancel
                                    </Button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action>
                                    <Button variant="solid" color="green">
                                        Yes, I have
                                    </Button>
                                </AlertDialog.Action>
                            </Flex>
                        </AlertDialog.Content>
                    </AlertDialog.Root>
                </div>
            </Card>
        </Box>

    )
}

export default Todo