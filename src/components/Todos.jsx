import { Text } from "@radix-ui/themes"
import Todo from "./Todo"


const Todos = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <Text as="h1" className="text-3xl font-semibold text-amber-600">My Todos</Text>
            <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 md:gap-6 gap-4">
                <Todo />
            </section>
        </div>
    )
}

export default Todos