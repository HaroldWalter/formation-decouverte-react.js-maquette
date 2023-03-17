const List = ({ todos, deleteTodo, toggleTodo }) => {
	const handleDelete = (index) => {
      deleteTodo(index)
   };
   
	return (
		<ul>
			{todos.map((todo, index) => (
				<li key={index}>
					<i
						className={"far fa-2x " + (todo.done ? "fa-check-square" : "fa-square")}
                  onClick={ () => {toggleTodo(index)} }
					></i>
					<span>{todo.description}</span>
					<button
						onClick={() => {
							handleDelete(index);
						}}
					>
						<i className="fas fa-trash fa-2x"></i>
					</button>
				</li>
			))}
		</ul>
	);
};
export default List;
