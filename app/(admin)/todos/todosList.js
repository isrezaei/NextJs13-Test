import Link from "next/link";

const fetchTodos = async () =>
{
    const getTodos = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await getTodos.json()
}


const TodosList = async () => {

    const Todos = await fetchTodos()
    console.log(Todos)

    return (
        <div>
            {
                Todos.map((value) => (
                        <p key={value.id}>
                            <Link href={`/todos/${value.id}`}>Number Todos is {value.id}</Link>
                        </p>
                    )
                )
            }
        </div>
    )
}

export default TodosList;