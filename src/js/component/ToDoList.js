import React from "react";
import { useState } from "react";
const toDoList = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");
	const addTask = () => {
		const newTodos = todos.concat({ title: task, id: todos.length + 1 });
		setTodos(newTodos);
	};
	const deleteTask = i => {
		let newTodos = [...todos]
		newTodos.splice(i,1);
		setTodos(newTodos);
	};

	return (
		<div>
			<input
				type="text"
				value={task}
				onChange={e => {
					setTask(e.target.value);
				}}
			/>
			<button onClick={addTask}>Add</button>

			<ul>
				{todos.map(todo => {
					// console.log(todo);
					return (
						<li key={todo.id}>
							{todo.title}
							<button onClick={() => deleteTask(todo.id)}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
// {
// 	array.map(item => {
// 		return <div key={item.id}>I am one Object in the Array {item}</div>;
// 	});
// }

export default toDoList;
