import React, {Component} from 'react'

class TodoForm extends Component {
  onChange(event) {
    this.setState({
      todo: event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    var todo = this.state.todo
    this.props.onTodoAction(todo)
    this.setState({
      todo: ""
    })
  }
  render(){
    return (
      <div className='todoForm'>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            autoFocus={this.props.autoFocus}
            onChange={e => this.onChange(e)}
            placeholder='Write a todo'
            type='text'
            value={(this.state && this.state.todo) || ''} />
          <button type='submit'>{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
