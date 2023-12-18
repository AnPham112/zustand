import { useState } from 'react';
import { useStore } from '../store';
import './Column.css';
import Task from './Task';
import { useMemo } from 'react';

// eslint-disable-next-line react/prop-types
function Column({ state }) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const tasks = useStore((store) => store.tasks);
  const addTask = useStore((store) => store.addTask);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => task.state === state)
  }, [tasks, state]);

  const handleOnDragOver = (e) => {
    e.preventDefault();
    console.log('drag')
  }
  const handleOnDrop = (e) => {
    e.preventDefault();
    console.log('drop')
  }


  return (
    <div className="column" onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.title} title={task.title}></Task>
      ))}
      {open && (
        <div className="Modal">
        <div className="modalContent">
          <input onChange={(e) => setText(e.target.value)} value={text} />
          <button
            onClick={() => {
              addTask(text, state)
              setText('');
              setOpen(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      )}

      
      </div>
  )
}

export default Column