    import { useSelector,useDispatch } from "react-redux"
    import { deleteTask } from "../features/tasks/taskSlice"
    import {Link} from 'react-router-dom'

    export const TaskList = () => {

        const tasks = useSelector(state => state.tasks)
        const dispatch = useDispatch()

        const handleDelete = (id) => {
            dispatch(deleteTask(id))
        }

        return (
            <div>

                <header>
                    <h1>Task {tasks.length} </h1>
                    <Link to="/add">Add Task</Link>
                </header>

                {tasks?.map(task => (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <Link to={`/edit-task/${task.id}`} >edit</Link>
                        <button onClick={()=>handleDelete(task.id)}>delete</button>
                    </div>
                ))}
            </div>
        )
    }
