import classNames from 'classnames';
import './Task.css';
import { useStore } from '../store';


function Task({ title}) {
  const task = useStore((store) => store.tasks.find((task) => task.title === title))
  const deleteTask = useStore((store) => store.deleteTask)


  return (
    <div
    className="task"
    draggable
  >
    <div>{task.title}</div>
    <div className="bottomWrapper">
      <div>
        <button onClick={() => deleteTask(task.title)}>Delete</button>
      </div>
      <div className={classNames('status', task.state)}>{task.state}</div>
    </div>
  </div>
  )
}

export default Task