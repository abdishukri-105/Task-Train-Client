import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteTodo from "../components/DeleteTodo";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
//     const [showModal, setShowModal] = useState(false);

//   const handleEdit = () => {
//     setShowModal(true);
//   };

    useEffect(() => {
      fetch("http://localhost:3000/todos")
        .then((r) => r.json())
        .then((data) => setTasks(data));
    }, []);
  
// fetch("http://localhost:3000/todos")
//   .then((response) => response.json())
//   .then((data) => {
//     setTasks(data);
//     console.log(data)
//     })
//   .catch((error) => console.log(error));

    return ( 
        <>
        <div className="flex flex-col items-center bg-slate-200  h-screen">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className="my-4 p-4 bg-white rounded-lg shadow-lg w-96">
                <div className="flex flex-col justify-between">
                  <div className="mb-3">
                    <h2 className="text-lg font-bold">{task.title}</h2>
                    <p className="text-gray-700 mt-2">{task.description}</p>
                  </div>
                  <div className="flex justify-between text-right">
                    <p className="text-gray-900 ">status: {task.status}</p>
                    <p className="text-gray-900">priority: {task.priority}</p>
                    <button className="text-red-600"> Delete</button>
                  </div>
                
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-lg font-bold mb-4">No tasks found</h2>
              <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-700">
                <Link to="/new">Make a new task</Link>
              </button>
            </div>
          )}
        </div>
      </>
      
     );
}
 
export default TodoList;