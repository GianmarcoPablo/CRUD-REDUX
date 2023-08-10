import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { addTask,updateTask } from "../features/tasks/taskSlice"
import { v4 as uuid} from 'uuid';
import {useNavigate,useParams} from 'react-router-dom'

export const TaskForm = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(id){
            //edit
            dispatch(updateTask(task))
        }else{
            dispatch(addTask({...task,id:uuid()}))
        }
        navigate('/')
    }

    useEffect(() => {
        if (id) {
            const taskFound = tasks.find(task => task.id === id)
            setTask(taskFound)
        }
    }, [id,tasks]);
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='title'
                name="title"
                onChange={handleInputChange}
                value={task?.title}
            />
            <textarea
                placeholder='description'
                name="description"
                onChange={handleInputChange}
                value={task?.description}
            ></textarea>
            <input type='submit' value="save" />
        </form>
    )
}
