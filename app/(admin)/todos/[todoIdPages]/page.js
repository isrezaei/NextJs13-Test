import {notFound} from "next/navigation";

//*--> Add not found pages for not exist Params
export const dynamicParams = true

const getOneData = async (id) =>
{
    //!--> no-cache is SSR
    //!--> force-cache is SSG
    //!--> next : {revalidate : 60} is ISR (Incremental Static Regeneration) use generateStaticParams() with them

    const getTodos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}` , {next : {revalidate : 60}})
    return await getTodos.json()
}


const TodoPage = async (props) => {

    const id = props.params.todoIdPages
    const EachTodos = await getOneData(id)

    //*--> Add not found pages for not exist Params
    if (!EachTodos.id) return notFound()

    return (
        <div>
            {
                <p>{EachTodos.id} : {EachTodos.title}</p>
            }
        </div>
    );
};

export default TodoPage;


export async function generateStaticParams()
{
    const getTodos = await fetch('https://jsonplaceholder.typicode.com/todos')
    const Todos = await getTodos.json()

    const trimmedTodos = Todos.splice(0, 10)

    //!--> Format returns [{todoIdPages : '1'} , {todoIdPages : '2'} , ...]
    return trimmedTodos.map(value => ({todoIdPages : value.id.toString()}))
}