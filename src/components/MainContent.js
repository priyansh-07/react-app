import React from "react";


class MainContent extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todoData
		};
	}
	render() {
		const todoItemComponents = this.state.todos.map( tdata => <TodoItem key={tdata.id} item={tdata} />);
		return (
			<main className="todo-list">
				{todoItemComponents}
			</main>
		);
	}
}

export default MainContent;