import React from "react";
import "./styles.css";

const Todo = props =>
{
  return(
    <li>
      <span>{props.todo.text}</span>
      <button onClick = {props.onDelete}>Delete
      </button>
    </li>
  )
}

var id = 0;
class App extends React.Component
{
  constructor()
  {
    super();
    this.state=
    {
      todos:[]
    }
  }
  addTodo()
  {
    const text = prompt("Enter TODO - ");
    this.setState({
      todos: [ ...this.state.todos,{text:text, id:id++}]
    })
  }

  removeTodo(id)
  {
    this.setState({
      todos:this.state.todos.filter(todo => todo.id
        !== id)
    })
  }

  render()
  {
    return (
      <div> 
        <button onClick={()=> this.addTodo()}> Add
        TODO
        </button>
        {
          this.state.todos.map(todo =>
            <Todo 
            todo={todo}
            onDelete = {() => this.removeTodo(todo.id)}
            />
      )}
      </div>
    )
  }
}
export default App;
