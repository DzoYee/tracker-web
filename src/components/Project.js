import { Component, PropTypes } from 'react'
import Tasklist from './Tasklist'
import Graph from './Graph'
import Form from './Form'


class Project extends Component {
  render() {
    const { completeTask, addTask, startTask, id, name, tasks } = this.props
    return (
      <div>
        <h1>{name}</h1>
        <Graph tasks={tasks} />
        <div className='container bordered-container'>
          <Form 
            id={id}
            addTask={addTask}
          />
          <Tasklist
            startTask={startTask}
            completeTask={completeTask}
            tasks={tasks}
            id={id}
          />
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  addTask: PropTypes.func.isRequired,
  startTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tasks: PropTypes.shape({
    count: PropTypes.number.isRequired,
    todo: PropTypes.number.isRequired,
    inProgress: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    }))
  })
}

export default Project;
