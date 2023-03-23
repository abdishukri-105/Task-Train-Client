// TaskCard.js



// function EditTodoModal({ task }) {
//   const [showModal, setShowModal] = useState(false);

//   const handleEdit = () => {
//     setShowModal(true);
//   };

//   return (
//     <div>
//       <h2>{task.title}</h2>
//       <p>{task.description}</p>
//       <button onClick={handleEdit}>Edit</button>
//       <EditTaskModal task={task} showModal={showModal} setShowModal={setShowModal} />
//     </div>
//   );
// }

// export default TaskCard;

// EditTaskModal.js
import { useState, useEffect } from 'react';

function EditTodoModal({ task, showModal, setShowModal }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit the updated data to the server and update the record in the database
    // close the modal and update the state of the parent component
    setShowModal(false);
  };

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setPriority(task.priority);
  }, [task]);

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  rows="3"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <input
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="priority">Priority</label>
                <input
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                />
              </div>
              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditTodoModal
