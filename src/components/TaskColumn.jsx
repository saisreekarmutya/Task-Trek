import React from 'react'
import TaskCard from './TaskCard'
import './TaskColumn.css' // Make sure this is imported to apply the styles

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  const filteredTasks = tasks
    .map((task, index) => ({ ...task, originalIndex: index })) // preserve original index
    .filter(task => task.status === status)

  return (
    <section className='task_column'>
      <h2 className='task_column_title'>
        <img src={icon} alt="" className='task_column_icon' />
        {title}
      </h2>
      <div className='task_column_cards'>
        {filteredTasks.map(task => (
          <TaskCard
            key={task.originalIndex}
            index={task.originalIndex}
            title={task.task}
            tags={task.tags}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  )
}

export default TaskColumn


