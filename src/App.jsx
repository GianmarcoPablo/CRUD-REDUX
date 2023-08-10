import { TaskList } from "./components/TaskList"
import { TaskForm } from "./components/TaskForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/add" element={<TaskForm />} />
                    <Route path="/edit-task/:id" element={<TaskForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
