import { createContext, useCallback, useContext, useEffect, useState } from "react";
import useContractInstance from "../hooks/useContractInstance";

const TodoContext = createContext({
    todos: []
})
export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const readOnlyTodoContract = useContractInstance();

    const formatEnum = (value) => {
        const status = Number(value);
        switch (status) {
            case 1:
                return "Created";
            case 2:
                return "Edited";
            case 3:
                return "Completed";
            default:
                return "Pending";
        }
    }

    const getTodos = useCallback(async () => {
        if (!readOnlyTodoContract) return;

        try {
            const data = await readOnlyTodoContract.getAllTodo();
            const formattedTodos = data.map((todo) => ({
                title: todo.title,
                description: todo.description,
                status: formatEnum(todo.status)
            }))

            setTodos(formattedTodos);
        } catch (error) {
            console.log("Error fetching todos", error);
        }
    }, [readOnlyTodoContract])

    useEffect(() => {
        getTodos();
    }, [getTodos])

    return (
        <TodoContext.Provider value={{ todos }}>
            {children}
        </TodoContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = () => {
    const context = useContext(TodoContext);
    return context;
}