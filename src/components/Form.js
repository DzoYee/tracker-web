import { Component, PropType } from 'react'

class Form extends Component {
  render() {
    let inputName
    let inputDescription  
    const { id, addTask } = this.props
    return (
      <div>
        <h2 className='createTask block-label'> Create New Task</h2>
        <hr></hr>
        <form onSubmit={e => {
          e.preventDefault()
          if (!inputName.value.trim()) {
            return
          }
          addTask(id, inputName.value, inputDescription.value)
          inputName.value = ''
          inputDescription.value = ''
          document.querySelector('.first-input').focus();
        }}>
          <div className="form-group">
            <label className='input-label' for="name">Task Name</label>
            <input className='form-control first-input input' ref={node => { inputName = node }} />
          </div>
          <div className="form-group">
            <label className='input-label' for="desc">Task Description</label>
            <input className='form-control input' ref={node => { inputDescription = node }} />
          </div>
          <button type='submit' className='btn btn-primary'>Create</button>
        </form>
      </div>
    );
  }
}

export default Form