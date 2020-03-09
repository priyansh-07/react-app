import React from "react"
import TodoItem from "./components/TodoItem";
import todoData from "./components/todoData.js"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todoData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleChange.bind(this);
  }
  
  handleChange(id) {
    this.setState( prevState => {
      const newTodos = prevState.todos.map( item => {
        if (id === item.id)
          item.completed = item.completed ? false : true;
        return item;
      });
      return {
        todos: newTodos//prevState.todos[id- 1].completed = newVal
      }
    });
  }

  handleInput(event) {
    this.setState({txt: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    var item = this.state.txt;

  }

	render() {
    const todoItemComponents = this.state.todos.map( tdata => 
      <TodoItem 
        key={tdata.id} 
        item={tdata} 
        func={this.handleChange}/>
    );
		return (
			<main className="todo-list">
				{todoItemComponents}
			</main>
		);
	}
}

export default App;